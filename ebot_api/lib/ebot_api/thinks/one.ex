defmodule EbotApi.Thinks.One do
  use Ecto.Schema
  import Ecto.Changeset


  schema "ones" do
    field :content, :string
    # field :user_id, :id
    belongs_to :user, EbotApi.Accounts.User

    timestamps()
  end

  @doc false
  def changeset(one, attrs) do
    one
    |> cast(attrs, [:content])
    |> validate_required([:content])
  end
end
