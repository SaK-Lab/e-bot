defmodule EbotApi.ThinksTest do
  use EbotApi.DataCase

  alias EbotApi.Thinks

  describe "ones" do
    alias EbotApi.Thinks.One

    @valid_attrs %{content: "some content", status_id: 0}
    @update_attrs %{content: "some updated content", status_id: 1}
    @invalid_attrs %{content: nil, status_id: nil}

    def one_fixture(attrs \\ %{}) do
      {:ok, one} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Thinks.create_one()

      one
    end

    test "list_ones/0 returns all ones" do
      one = one_fixture()
      assert Thinks.list_ones() == [one]
    end

    test "get_one!/1 returns the one with given id" do
      one = one_fixture()
      assert Thinks.get_one!(one.id) == one
    end

    test "create_one/1 with valid data creates a one" do
      assert {:ok, %One{} = one} = Thinks.create_one(@valid_attrs)
      assert one.content == "some content"
    end

    test "create_one/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Thinks.create_one(@invalid_attrs)
    end

    test "update_one/2 with valid data updates the one" do
      one = one_fixture()
      assert {:ok, one} = Thinks.update_one(one, @update_attrs)
      assert %One{} = one
      assert one.content == "some updated content"
    end

    test "update_one/2 with invalid data returns error changeset" do
      one = one_fixture()
      assert {:error, %Ecto.Changeset{}} = Thinks.update_one(one, @invalid_attrs)
      assert one == Thinks.get_one!(one.id)
    end

    test "delete_one/1 deletes the one" do
      one = one_fixture()
      assert {:ok, %One{}} = Thinks.delete_one(one)
      assert_raise Ecto.NoResultsError, fn -> Thinks.get_one!(one.id) end
    end

    test "change_one/1 returns a one changeset" do
      one = one_fixture()
      assert %Ecto.Changeset{} = Thinks.change_one(one)
    end
  end
end
