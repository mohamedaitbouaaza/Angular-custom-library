//Lightbox popup
$("#lightBox-btn").on("click", function(){
  $(".lightbox-overlay").addClass("active");
});

//Modal 
$("#submitBtn").on("click", function(){
  $(".modal-overlay").addClass("active");
});

$(".modal-overlay").on("click", function(){
  $(".modal-overlay").removeClass("active");
});

// Preloader 

$(window).on('load', function () {
  if ($('.loader').length) {
    $('.loader').delay(300).fadeOut('slow', function () {
      $(this).remove();
      return false;
    });
  }
});



//Fixed Header
$(document).ready(function() {
  $(window).scroll(function() {
      setTimeout(function() {
          var sticky = $('#main-nav'),
              scroll = $(window).scrollTop();
          if (scroll >= 1) sticky.addClass('is-sticky');
          else sticky.removeClass('is-sticky');
      }, 200);
      setTimeout(function() {
          var sticky = $('#main-nav'),
              scroll = $(window).scrollTop();
          if (scroll >= 1) sticky.addClass('is-sticky-open');
          else sticky.removeClass('is-sticky-open');
      }, 210);
  });
});


// Add eneficiary

$(".add-beneficiaryBtn").on("click", function(){
  $(".lightbox-overlay").addClass("active");
});

$("#add-btn").on("click", function(){
  $(".lightbox-overlay").removeClass("active");
  $("#addBeneficiary").addClass("hide");
  $("#chooseBeneficiary").removeClass("hide");
});

$("#addMore").on("click", function(){
  $(".lightbox-overlay").addClass("active");
});

$(".close").on("click", function(){
  $(".lightbox-overlay").removeClass("active");
});

// filter show/hide 
  $(document).ready(function() {
    $('.filter-button').click(function() {
      $(this).toggleClass('active-filter');
      $(this).parents('.filter-section').find('.filter-container').slideToggle();      
    });

    $('.reset-btn').click(function() {
      $(this).parents('.filter-section').find('.filter-container').slideUp();   
       $('.filter-button').removeClass('selected-filter active-filter'); 
    });

    $('.to-apply-btn').click(function() {
      $(this).parents('.filter-section').find('.filter-container').slideUp();   
       $('.filter-button').removeClass('active-filter'); 
       $('.filter-button').addClass('selected-filter'); 
    });
  });  

  (function($) {
    var CheckboxDropdown = function(el) {
      var _this = this;
      this.isOpen = false;
      this.areAllChecked = false;
      this.$el = $(el);
      this.$label = this.$el.find('.dropdown-label');
      this.$checkAll = this.$el.find('[data-toggle="check-all"]').first();
      this.$inputs = this.$el.find('[type="checkbox"]');
      
      this.onCheckBox();
      
      this.$label.on('click', function(e) {
        e.preventDefault();
        _this.toggleOpen();
      });
      
      this.$checkAll.on('click', function(e) {
        e.preventDefault();
        _this.onCheckAll();
      });
      
      this.$inputs.on('change', function(e) {
        _this.onCheckBox();
      });
    };
    
    CheckboxDropdown.prototype.onCheckBox = function() {
      this.updateStatus();
    };
    
    CheckboxDropdown.prototype.updateStatus = function() {
      var checked = this.$el.find(':checked');
      
      this.areAllChecked = false;
      this.$checkAll.html('Check All');
    };
    
    CheckboxDropdown.prototype.onCheckAll = function(checkAll) {
      if(!this.areAllChecked || checkAll) {
        this.areAllChecked = true;
        this.$checkAll.html('Uncheck All');
        this.$inputs.prop('checked', true);
      }
      else {
        this.areAllChecked = false;
        this.$checkAll.html('Check All');
        this.$inputs.prop('checked', false);
      }
      
      this.updateStatus();
    };
    
    CheckboxDropdown.prototype.toggleOpen = function(forceOpen) {
      var _this = this;
      
      if(!this.isOpen || forceOpen) {
         this.isOpen = true;
         this.$el.addClass('on');
        $(document).on('click', function(e) {
          if(!$(e.target).closest('[data-control]').length) {
           _this.toggleOpen();
          }
        });
      }
      else {
        this.isOpen = false;
        this.$el.removeClass('on');
        $(document).off('click');
      }
    };
    
    var checkboxesDropdowns = document.querySelectorAll('[data-control="checkbox-dropdown"]');
    for(var i = 0, length = checkboxesDropdowns.length; i < length; i++) {
      new CheckboxDropdown(checkboxesDropdowns[i]);
    }
  })(jQuery);

    //OTP Function
  
    $('.otp-group').find('input').each(function() {
      $(this).attr('maxlength', 1);
      $(this).on('keyup', function(e) {
        var parent = $($(this).parent());
        
        if(e.keyCode === 8 || e.keyCode === 37) {
          var prev = parent.find('input#' + $(this).data('previous'));
          
          if(prev.length) {
            $(prev).select();
          }
        } else if((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39) {
          var next = parent.find('input#' + $(this).data('next'));
          
          if(next.length) {
            $(next).select();
          } else {
            if(parent.data('autosubmit')) {
              parent.submit();
            }
          }
        }
      });
    });