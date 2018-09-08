/*

var customScroll = new customSliderScroll({
	slider   : '.slider-team .slider__slides',
	container: '.js-custom-pagination',
	anchor   : 'span'
});

*/

var customSliderScroll = function(options) {
	this.init(options);
}

customSliderScroll.prototype.init = function(options){
	this.options            = options;
	this.$win               = $(window);
	this.$doc               = $(document);
	this.$container         = $(this.options.container);
	this.$slider            = $(options.slider);
	this.$anchor            = this.$container.find(this.options.anchor);
	this.slidesNumber       = this.$slider.find('.owl-item').length;
	this.currentTranslate   = 0;
	this.currentActiveSlide = this.$slider.find('.owl-item.active').index();
	this.allowMove          = false;
	this.preventSelectClass = 'no-select';
	this.changeTimer;

	this.updateVars();
	this.attachEvents();
	this.setInitialAnchorPosition();
}

customSliderScroll.prototype.attachEvents = function(){
	this
		.$slider
			.on('translated.owl.carousel', function(data){
				if (this.currentActiveSlide !== data.page.index && !this.allowMove) {
					this.currentActiveSlide = data.page.index;
					this.setInitialAnchorPosition();
				}
			}.bind(this));

	this
		.$anchor
			.on('mousedown touchstart', function(){
				this.allowMove = true;
				this.$slider.addClass(this.preventSelectClass);
			}.bind(this))

	this
		.$win
			.on('resize', this.updateVars.bind(this));

	this
		.$doc
			.on('mousemove touchmove', function(e){
				var pageX = e.type == 'touchmove' ? e.originalEvent.touches[0].pageX : e.pageX;

				if (this.allowMove) {
					this.updateTranslate(this.getValidTranslate(pageX - this.offsetLeft));
					this.switchSliderItem();
				}
			}.bind(this))
			.on('mouseup touchend', function(){
				this.allowMove = false;
				this.$slider.removeClass(this.preventSelectClass);
			}.bind(this));
}

customSliderScroll.prototype.updateTranslate = function(translateValue){
	this.currentTranslate = translateValue;
	this
		.$anchor
			.css({
				'transform': 'translateX(' + translateValue + 'px)'
			});
}

customSliderScroll.prototype.getValidTranslate = function(translateValue){
	return translateValue < 0 ? 0 : translateValue + this.anchorWidth > this.width ? this.width - this.anchorWidth : translateValue;
}

customSliderScroll.prototype.updateVars = function(){
	this.offsetLeft  = this.$container.offset().left;
	this.width       = this.$container.outerWidth();
	this.anchorWidth = this.$anchor.outerWidth();
	this.sectors     = this.getSectors();

	this.setInitialAnchorPosition();
}

customSliderScroll.prototype.getSectors = function(){
	var step      = this.width / this.slidesNumber;
	var stepValue = -(step);
	var sectors   = [];

	for (var i = 0; i < this.slidesNumber + 1; i++) {
		stepValue += step;

		sectors.push(stepValue);
	}

	return sectors;
}

customSliderScroll.prototype.switchSliderItem = function(){
	for (var i = 0; i < this.sectors.length - 1; i++) {
		if (this.currentTranslate > this.sectors[i] && this.sectors[i + 1] >= this.currentTranslate) {
			if (this.currentActiveSlide !== i) {
				this.$slider.trigger('to.owl.carousel', i);

				this.currentActiveSlide = i;
			}

			break;
		}
	}
}

customSliderScroll.prototype.setInitialAnchorPosition = function(){
	var translateValue = this.sectors[this.currentActiveSlide] + ((this.sectors[this.currentActiveSlide + 1] - this.sectors[this.currentActiveSlide]) / 2) - (this.anchorWidth / 2);

	this.updateTranslate(translateValue);
}

export default customSliderScroll;
