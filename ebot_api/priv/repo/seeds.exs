# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     EbotApi.Repo.insert!(%EbotApi.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

alias EbotApi.Repo
alias EbotApi.Accounts
alias EbotApi.Thinks

alias EbotApi.Accounts.User
alias EbotApi.Thinks.One

Repo.delete_all(User)
Repo.delete_all(One)

attrs =  %{password: "password", user_name: "admin"}
{:ok, user} = Accounts.create_user(attrs)

Thinks.create_one(user, %{content: "sample1", status_id: 0})
Thinks.create_one(user, %{content: "sample2", status_id: 0})
Thinks.create_one(user, %{content: "sample3", status_id: 0})
