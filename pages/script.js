
//Чекбокс для фильтра изменение стилей кнопки при нажатии
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.filter-programs__item input[type="checkbox"]').forEach(function(checkbox) {
    function updateItemState() {
      if (checkbox.checked) {
        checkbox.closest('.filter-programs__item').classList.add('active');
      } else {
        checkbox.closest('.filter-programs__item').classList.remove('active');
      }
    }

    // Initialize the state based on the checkbox's initial state
    updateItemState();

    // Update the state whenever the checkbox changes
    checkbox.addEventListener('change', updateItemState);
  });
});
//Конец скрипта для чекбокса
const container = document.getElementById("myCarousel");
const container2 = document.getElementById("myCarousel_right");
const container_review = document.getElementById("myCarousel__review");
// const options = { infinite: false };
const options = {
  Autoplay: {
    timeout: 15000,
    showProgress:false,
  },
    breakpoints: {
      "(min-width: 768px)": {
        classNames: {
          container: "f-carousel md",
        },
      },
      "(min-width: 1024px)": {
        classNames: {
          container: "f-carousel lg",
        },
      },
      "(min-width: 1280px)": {
        classNames: {
          container: "f-carousel xl",
        },
      },
    },
  };
new Carousel(container, options,{ Autoplay });
new Carousel(container2, options,{ Autoplay });
new Carousel(container_review, options,{ Autoplay });
/*FAQ аккордион начало*/
class ItcAccordion {
  constructor(target, config) {
  this._el = typeof target === 'string' ? document.querySelector(target) : target;
  const defaultConfig = {
  alwaysOpen: true
  };
  this._config = Object.assign(defaultConfig, config);
  this.addEventListener();
  }
  addEventListener() {
  this._el.addEventListener('click', (e) => {
  const elHeader = e.target.closest('.item__question');
  if (!elHeader) {
    return;
  }
  if (!this._config.alwaysOpen) {
    const elOpenItem = this._el.querySelector('.FAQ_item_show');
    if (elOpenItem) {
      elOpenItem !== elHeader.parentElement ? elOpenItem.classList.toggle('FAQ_item_show') : null;
    }
  }
  elHeader.parentElement.classList.toggle('FAQ_item_show');
  });
  }
  }
  
  // new ItcAccordion('#accordion-1');
  new ItcAccordion('#accordion-1', {
  alwaysOpen: false
  });
  /* AQ аккордион конец*/

/*Начало MODx pdoResources Ajax Filter */
$(function() {
  // MODx pdoResources Ajax Filter
  // Filter Settings
  var fadeSpeed             = 200, // Fade Animation Speed
      ajaxCountSelector     = '.ajax-count', // CSS Selector of Items Counter
      ajaxContainerSelector = '.ajax-container', // CSS Selector of Ajax Container
      ajaxItemSelector      = '.ajax-item', // CSS Selector of Ajax Item
      ajaxFormSelector      = '.ajax-form', // CSS Selector of Ajax Filter Form
      ajaxFormButtonStart   = '.ajax-start', // CSS Selector of Button Start Filtering
      ajaxFormButtonReset   = '.ajax-reset', // CSS Selector of Button Reset Ajax Form
      sortDownText          = 'По убыванию',
      sortUpText            = 'По возрастанию';

  // Count items or update the counter based on the presence of .ajax-filter-count
  function ajaxCount() {
      if ($('.ajax-filter-count').length) {
          var count = $('.ajax-filter-count').data('count');
          $(ajaxCountSelector).text(count);
      } else {
          $(ajaxCountSelector).text($(ajaxItemSelector).length);
      }
  }
  ajaxCount();

  // Main AJAX function for updating content and count
  function ajaxMainFunction() {
      $.ajax({
          data: $(ajaxFormSelector).serialize(),
          beforeSend: function() {
              $(ajaxContainerSelector).fadeOut(fadeSpeed);
          }
      }).done(function(response) {
          var $response = $(response);
          setTimeout(function() {
              $(ajaxContainerSelector).html($response.find(ajaxContainerSelector).html()).fadeIn(fadeSpeed);
              ajaxCount();
          }, fadeSpeed);
      });
  }

  // Load more items on click
  $(ajaxContainerSelector).on('click', '.ajax-more', function(e) {
      e.preventDefault();
      var offset = $(ajaxItemSelector).length;
      $.ajax({
          data: $(ajaxFormSelector).serialize() + '&offset=' + offset
      }).done(function(response) {
          $('.ajax-more').remove();
          var $response = $(response);
          $response.find(ajaxItemSelector).hide();
          $(ajaxContainerSelector).append($response.find(ajaxContainerSelector).html());
          $(ajaxItemSelector).fadeIn();
      });
  });

  // Start filtering on button click
  $(ajaxFormButtonStart).click(function(e) {
      e.preventDefault();
      ajaxMainFunction();
      if (checkbox.checked) {
        checkbox.closest('.filter-programs__item').classList.add('active');
      }
  });

  // Reset the form and update styles
  $(ajaxFormButtonReset).click(function(e) {
      e.preventDefault();
      $(ajaxFormSelector).trigger('reset');
      $('input[name=sortby]').val('pagetitle');
      $('input[name=sortdir]').val('asc');

      setTimeout(function() {
          $('[data-sort-by]').data('sort-dir', 'asc').removeClass('button-sort-asc').text(sortUpText);
      }, fadeSpeed);

      // Update item states for checkboxes
      $('.filter-programs__item input[type="checkbox"]').each(function() {
          $(this).prop('checked', false);
          $(this).closest('.filter-programs__item').removeClass('active');
      });

      // Call main AJAX functions
      ajaxMainFunction();
      ajaxCount();
  });

  // Update the form state on input change
  $(ajaxFormSelector + ' input').change(function() {
      ajaxMainFunction();
  });

  // Sorting functionality
  $('[data-sort-by]').data('sort-dir', 'asc').click(function() {
      var ths = $(this);
      $('input[name=sortby]').val(ths.data('sort-by'));
      $('input[name=sortdir]').val(ths.data('sort-dir'));

      setTimeout(function() {
          $('[data-sort-by]').not(ths).data('sort-dir', 'asc').removeClass('button-sort-asc').text(sortUpText);
          if (ths.data('sort-dir') === 'asc') {
              ths.data('sort-dir', 'desc');
              ths.addClass('button-sort-asc');
              ths.text(sortDownText);
          } else {
              ths.data('sort-dir', 'asc');
              ths.removeClass('button-sort-asc');
              ths.text(sortUpText);
          }
      }, fadeSpeed);

      ajaxMainFunction();
  });
});
/*Конец MODx pdoResources Ajax Filter */


