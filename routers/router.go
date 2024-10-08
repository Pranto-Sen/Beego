
package routers

import (
	"myApp/controllers"
	beego "github.com/beego/beego/v2/server/web"
)

func init() {
	// Static pages
	beego.Router("/", &controllers.MainController{})
	beego.Router("/voting", &controllers.MainController{})
	beego.Router("/breed", &controllers.MainController{})
	beego.Router("/favourite", &controllers.MainController{})

	// API routes
	beego.Router("/api/cat", &controllers.VotingController{}, "get:GetCatImages")
	beego.Router("/api/breeds", &controllers.BreedController{}, "get:GetBreeds")
	beego.Router("/api/favorites", &controllers.FavouriteController{}, "post:AddFavorite;get:GetFavorites")
	beego.Router("/api/favorites/:id", &controllers.FavouriteController{}, "delete:DeleteFavorite")
}
