defmodule EbotApiWeb.OneController do
  use EbotApiWeb, :controller

  alias EbotApi.Thinks
  alias EbotApi.Thinks.One

  action_fallback EbotApiWeb.FallbackController

  def index(conn, _params) do
    ones = Thinks.list_ones(conn.private.guardian_default_resource)
    render(conn, "index.json", ones: ones)
  end

  def create(conn, %{"one" => one_params}) do
    with {:ok, %One{} = one} <- Thinks.create_one(conn.private.guardian_default_resource, one_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", one_path(conn, :show, one))
      |> render("show.json", one: one)
    end
  end

  def show(conn, %{"id" => id}) do
    one = Thinks.get_one!(id)
    render(conn, "show.json", one: one)
  end

  def update(conn, %{"id" => id, "one" => one_params}) do
    one = Thinks.get_one!(id)

    with {:ok, %One{} = one} <- Thinks.update_one(one, one_params) do
      render(conn, "show.json", one: one)
    end
  end

  def delete(conn, %{"id" => id}) do
    one = Thinks.get_one!(id)
    with {:ok, %One{}} <- Thinks.delete_one(one) do
      send_resp(conn, :no_content, "")
    end
  end
end
