const app = Sammy("body", function () {
    this.use("Handlebars", "hbs");

    this.get('#/home', function(ctx){
        ctx.partial('./views/home.hbs')
    });
	
	
	
	/*
	this.get('#/home', function(ctx){
        ctx.loadPartials(commonPartial).partial('./views/home.hbs')
    });
	
	const commonPartial = {
		header: './views/common/header.hbs',
		footer: './views/common/footer.hbs',
	};
	*/
  
});
app.run('#/home');