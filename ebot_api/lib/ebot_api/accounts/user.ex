defmodule EbotApi.Accounts.User do
  use Ecto.Schema
  import Ecto.Changeset
  alias Comeonin.Bcrypt

  schema "users" do
    field :user_name, :string
    field :hashed_password, :string
    field :password, :string, virtual: true
    has_many :ones, EbotApi.Thinks.One

    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:user_name, :password])
    |> validate_required([:user_name, :password])
    |> unique_constraint(:user_name)
    |> validate_confirmation(:password)
    |> validate_length(:password, min: 6)
    |> put_password_hash
  end

  defp put_password_hash(changeset) do
    case changeset do
      %Ecto.Changeset{ valid?: true, changes: %{ password: pass }} ->
        put_change(changeset, :hashed_password, Bcrypt.hashpwsalt(pass))
      _ -> 
        changeset
    end
  end
end
