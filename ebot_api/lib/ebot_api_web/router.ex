defmodule EbotApiWeb.Router do
  use EbotApiWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  pipeline :bearer_auth do
    plug Guardian.Plug.VerifyHeader, realm: "Bearer"
    plug Guardian.Plug.LoadResource
  end

  pipeline :ensure_auth do
    plug Guardian.Plug.EnsureAuthenticated
  end

  scope "/api", EbotApiWeb do
    pipe_through :api
    post "/signin", AuthController, :sign_in
    post "/signout", AuthController, :sign_out
    post "/signup", UserController, :create
  end

  scope "/api", EbotApiWeb do
    pipe_through [ :api, :bearer_auth, :ensure_auth]
    resources "/ones", OneController, except: [:new, :edit]
    resources "/users", UserController, only: [:update, :delete, :show]
  end
end
