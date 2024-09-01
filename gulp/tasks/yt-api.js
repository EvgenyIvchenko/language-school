export const ytapi = () => app.gulp.src(app.path.source.ytapi)
	.pipe(app.gulp.dest(app.path.dist.js));
