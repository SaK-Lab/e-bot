defmodule EbotApi.Thinks do
  @moduledoc """
  The Thinks context.
  """

  import Ecto.Query, warn: false
  alias EbotApi.Repo

  alias EbotApi.Thinks.One

  @doc """
  Returns the list of ones.

  ## Examples

      iex> list_ones()
      [%One{}, ...]

  """
  def list_ones do
    Repo.all(One)
  end

  @doc """
  Gets a single one.

  Raises `Ecto.NoResultsError` if the One does not exist.

  ## Examples

      iex> get_one!(123)
      %One{}

      iex> get_one!(456)
      ** (Ecto.NoResultsError)

  """
  def get_one!(id), do: Repo.get!(One, id)

  @doc """
  Creates a one.

  ## Examples

      iex> create_one(%{field: value})
      {:ok, %One{}}

      iex> create_one(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_one(user, attrs \\ %{}) do
    user
    |> Ecto.build_assoc(:ones)
    |> One.changeset(attrs)
    |> Repo.insert()
    # %One{}
    # |> One.changeset(attrs)
    # |> Repo.insert()
  end

  @doc """
  Updates a one.

  ## Examples

      iex> update_one(one, %{field: new_value})
      {:ok, %One{}}

      iex> update_one(one, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_one(%One{} = one, attrs) do
    one
    |> One.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a One.

  ## Examples

      iex> delete_one(one)
      {:ok, %One{}}

      iex> delete_one(one)
      {:error, %Ecto.Changeset{}}

  """
  def delete_one(%One{} = one) do
    Repo.delete(one)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking one changes.

  ## Examples

      iex> change_one(one)
      %Ecto.Changeset{source: %One{}}

  """
  def change_one(%One{} = one) do
    One.changeset(one, %{})
  end
end
