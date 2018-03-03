defmodule EbotApiWeb.AuthController do
  use EbotApiWeb, :controller

  import Comeonin.Bcrypt, only: [ checkpw: 2, dummy_checkpw: 0]
  alias EbotApi.Accounts

  def sign_in(conn, params = %{ "user_name" => _, "password" => _}) do
    case check_email_and_password(params) do
      { :ok, user} ->
        case Guardian.encode_and_sign(user) do
          { :ok, jwt, _claims} -> 
            conn
            |> put_status(:created)
            |> render("show.json", %{ token: jwt, user_id: user.id})
          { :error, :token_storage_failure} ->
            handle_unauthenticated(conn, "There was an error creating the session (:token_storage_failure)")
          { :error, reason } ->
            handle_unauthenticated(conn, reason)
        end
      { :error, reason } ->
        handle_unauthenticated(conn, reason)
    end
  end

  def sign_out(conn, %{ "token" => token}) do
    with :ok <- Guardian.revoke!(token) do
      render(conn, "delete.json", [])
    end
  end

  defp handle_unauthenticated(conn, reason) do
    conn
    |> put_status(:unauthorized)
    |> render("401.json", message: reason)
  end

  defp check_email_and_password(%{ "user_name" => user_name, "password" => password}) do
    user = Accounts.get_by(user_name: user_name)

    cond do
      user && checkpw(password, user.hashed_password) ->
        { :ok, user }
      user -> 
        { :error, "The provided password doesn't match the provided user_name (#{user_name})"}
      true ->
        dummy_checkpw()
        { :error, "User does not exist with user_name #{user_name}" }
        
    end
  end
  
end