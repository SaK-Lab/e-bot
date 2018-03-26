defmodule EbotApi.Thinks.One do
  use Ecto.Schema
  import Ecto.Changeset


  schema "ones" do
    field :content, :string
    belongs_to :user, EbotApi.Accounts.User
    field :status_id, :integer, default: 0

    timestamps()
  end

  @doc false
  def changeset(one, attrs) do
    one
    |> cast(attrs, [:content, :status_id])
    |> validate_required([:content, :status_id])
  end
end
