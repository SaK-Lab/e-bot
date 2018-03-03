defmodule EbotApiWeb.OneView do
  use EbotApiWeb, :view
  alias EbotApiWeb.OneView

  def render("index.json", %{ones: ones}) do
    %{data: render_many(ones, OneView, "one.json")}
  end

  def render("show.json", %{one: one}) do
    %{data: render_one(one, OneView, "one.json")}
  end

  def render("one.json", %{one: one}) do
    %{id: one.id,
      content: one.content}
  end
end
