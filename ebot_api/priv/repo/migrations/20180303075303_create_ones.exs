defmodule EbotApi.Repo.Migrations.CreateOnes do
  use Ecto.Migration

  def change do
    create table(:ones) do
      add :content, :string
      add :user_id, references(:users, on_delete: :delete_all)
      add :status_id, :integer, dafault: 0

      timestamps()
    end

    create index(:ones, [:user_id])
  end
end
