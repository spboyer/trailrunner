services.Add.Mvc().AddJsonOptions(options =>
                  {
                      options.SerializerSettings.ContractResolver =
                           new CamelCasePropertyNamesContractResolver();
                  });



routes.MapRoute("spa-fallback", "{*anything}", new { controller = "Home", action = "Index" });
