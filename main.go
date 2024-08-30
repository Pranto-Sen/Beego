package main

import (
	_ "myApp/routers"
	beego "github.com/beego/beego/v2/server/web"
)

func main() {
    err := beego.LoadAppConfig("ini", "conf/app.conf")
    if err != nil {
        panic("Failed to load configuration file: " + err.Error())
    }

    beego.Run()
}
