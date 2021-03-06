defmodule EbotApiWeb.UserView do
  use EbotApiWeb, :view
  alias EbotApiWeb.UserView

  def render("index.json", %{users: users}) do
    %{data: render_many(users, UserView, "user.json")}
  end

  def render("show.json", %{user: user}) do
    %{data: render_one(user, UserView, "user.json")}
  end

  def render("user.json", %{user: user}) do
    %{id: user.id,
      user_name: user.user_name,
      hashed_password: user.hashed_password}
  end
end
