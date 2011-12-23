package controllers

import play.api._
import play.api.mvc._

object Application extends Controller {
  
  def index = Action {
    Ok(views.html.index("Your new application is ready."))
  }

  def indexworking = Action {
    Ok(views.html.indexworking("Your new application is ready. This javascript is statically defined."))
  }
  
}
