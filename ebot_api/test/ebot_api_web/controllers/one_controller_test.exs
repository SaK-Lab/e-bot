defmodule EbotApiWeb.OneControllerTest do
  use EbotApiWeb.ConnCase

  alias EbotApi.Thinks
  alias EbotApi.Thinks.One

  @create_attrs %{content: "some content", status_id: 0}
  @update_attrs %{content: "some updated content", status_id: 1}
  @invalid_attrs %{content: nil, status_id: nil}

  def fixture(:one) do
    {:ok, one} = Thinks.create_one(@create_attrs)
    one
  end

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all ones", %{conn: conn} do
      conn = get conn, one_path(conn, :index)
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create one" do
    test "renders one when data is valid", %{conn: conn} do
      conn = post conn, one_path(conn, :create), one: @create_attrs
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get conn, one_path(conn, :show, id)
      assert json_response(conn, 200)["data"] == %{
        "id" => id,
        "content" => "some content"}
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post conn, one_path(conn, :create), one: @invalid_attrs
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update one" do
    setup [:create_one]

    test "renders one when data is valid", %{conn: conn, one: %One{id: id} = one} do
      conn = put conn, one_path(conn, :update, one), one: @update_attrs
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get conn, one_path(conn, :show, id)
      assert json_response(conn, 200)["data"] == %{
        "id" => id,
        "content" => "some updated content"}
    end

    test "renders errors when data is invalid", %{conn: conn, one: one} do
      conn = put conn, one_path(conn, :update, one), one: @invalid_attrs
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete one" do
    setup [:create_one]

    test "deletes chosen one", %{conn: conn, one: one} do
      conn = delete conn, one_path(conn, :delete, one)
      assert response(conn, 204)
      assert_error_sent 404, fn ->
        get conn, one_path(conn, :show, one)
      end
    end
  end

  defp create_one(_) do
    one = fixture(:one)
    {:ok, one: one}
  end
end
