$(document).ready(function(){
    
    $("#dos").on("click", function(){

        $( ".contenedor" ).sortable();
        $( ".contenedor" ).disableSelection();

    });

    $("#tres").on("click", function(){
        $("#resizable").resizable({
            hadles: "se"

        });
    });


    $("#cuatro").on("click", function(){
        $("#selectable").selectable();
    });

    // Autocomplete
    $("#cinco").on("click", function(){1
        $.widget( "custom.combobox", {
            _create: function() {
              this.wrapper = $( "<span>" )
                .addClass( "custom-combobox" )
                .insertAfter( this.element );
       
              this.element.hide();
              this._createAutocomplete();
              this._createShowAllButton();
            },
       
            _createAutocomplete: function() {
              var selected = this.element.children( ":selected" ),
                value = selected.val() ? selected.text() : "";
       
              this.input = $( "<input>" )
                .appendTo( this.wrapper )
                .val( value )
                .attr( "title", "" )
                .addClass( "custom-combobox-input ui-widget ui-widget-content ui-state-default ui-corner-left" )
                .autocomplete({
                  delay: 0,
                  minLength: 0,
                  source: this._source.bind( this )
                })
                .tooltip({
                  classes: {
                    "ui-tooltip": "ui-state-highlight"
                  }
                });
       
              this._on( this.input, {
                autocompleteselect: function( event, ui ) {
                  ui.item.option.selected = true;
                  this._trigger( "select", event, {
                    item: ui.item.option
                  });
                },
       
                autocompletechange: "_removeIfInvalid"
              });
            },
       
            _createShowAllButton: function() {
              var input = this.input,
                wasOpen = false;
       
              $( "<a>" )
                .attr( "tabIndex", -1 )
                .attr( "title", "Show All Items" )
                .tooltip()
                .appendTo( this.wrapper )
                .button({
                  icons: {
                    primary: "ui-icon-triangle-1-s"
                  },
                  text: false
                })
                .removeClass( "ui-corner-all" )
                .addClass( "custom-combobox-toggle ui-corner-right" )
                .on( "mousedown", function() {
                  wasOpen = input.autocomplete( "widget" ).is( ":visible" );
                })
                .on( "click", function() {
                  input.trigger( "focus" );
       
                  // Close if already visible
                  if ( wasOpen ) {
                    return;
                  }
       
                  // Pass empty string as value to search for, displaying all results
                  input.autocomplete( "search", "" );
                });
            },
       
            _source: function( request, response ) {
              var matcher = new RegExp( $.ui.autocomplete.escapeRegex(request.term), "i" );
              response( this.element.children( "option" ).map(function() {
                var text = $( this ).text();
                if ( this.value && ( !request.term || matcher.test(text) ) )
                  return {
                    label: text,
                    value: text,
                    option: this
                  };
              }) );
            },
       
            _removeIfInvalid: function( event, ui ) {
       
              // Selected an item, nothing to do
              if ( ui.item ) {
                return;
              }
       
              // Search for a match (case-insensitive)
              var value = this.input.val(),
                valueLowerCase = value.toLowerCase(),
                valid = false;
              this.element.children( "option" ).each(function() {
                if ( $( this ).text().toLowerCase() === valueLowerCase ) {
                  this.selected = valid = true;
                  return false;
                }
              });
       
              // Found a match, nothing to do
              if ( valid ) {
                return;
              }
       
              // Remove invalid value
              this.input
                .val( "" )
                .attr( "title", value + " didn't match any item" )
                .tooltip( "open" );
              this.element.val( "" );
              this._delay(function() {
                this.input.tooltip( "close" ).attr( "title", "" );
              }, 2500 );
              this.input.autocomplete( "instance" ).term = "";
            },
       
            _destroy: function() {
              this.wrapper.remove();
              this.element.show();
            }
          });
       
          $( "#combobox" ).combobox();
          $( "#toggle" ).on( "click", function() {
            $( "#combobox" ).toggle();
          });
    

    });

    $("#seis").on("click", function(){
        var state = true;
        $( "#button" ).on( "click", function() {
        if ( state ) {
            $( "#effect" ).animate({
            backgroundColor: "#aa0000",
            color: "#fff",
            width: 500
            }, 1000 );
        } else {
            $( "#effect" ).animate({
            backgroundColor: "#fff",
            color: "#000",
            width: 240
            }, 1000 );
        }
        state = !state;
        });
    });

    $("#siete").on("click", function(){

        if ( !$( "<canvas>" )[0].getContext ) {
            $( "<div>" ).text(
              "Your browser doesn't support canvas, which is required for this demo."
            ).appendTo( "#graphs" );
            return;
        }

        var i = 0,
        width = 100,
        height = 100;
   
      $.each( $.easing, function( name, impl ) {
        var graph = $( "<div>" ).addClass( "graph" ).appendTo( "#graphs" ),
          text = $( "<div>" ).text( ++i + ". " + name ).appendTo( graph ),
          wrap = $( "<div>" ).appendTo( graph ).css( 'overflow', 'hidden' ),
          canvas = $( "<canvas>" ).appendTo( wrap )[ 0 ];
   
        canvas.width = width;
        canvas.height = height;
        var drawHeight = height * 0.8,
          cradius = 10,
          ctx = canvas.getContext( "2d" );
        ctx.fillStyle = "black";
   
        // Draw background
        ctx.beginPath();
        ctx.moveTo( cradius, 0 );
        ctx.quadraticCurveTo( 0, 0, 0, cradius );
        ctx.lineTo( 0, height - cradius );
        ctx.quadraticCurveTo( 0, height, cradius, height );
        ctx.lineTo( width - cradius, height );
        ctx.quadraticCurveTo( width, height, width, height - cradius );
        ctx.lineTo( width, 0 );
        ctx.lineTo( cradius, 0 );
        ctx.fill();
   
        // Draw bottom line
        ctx.strokeStyle = "#555";
        ctx.beginPath();
        ctx.moveTo( width * 0.1, drawHeight + .5 );
        ctx.lineTo( width * 0.9, drawHeight + .5 );
        ctx.stroke();
   
        // Draw top line
        ctx.strokeStyle = "#555";
        ctx.beginPath();
        ctx.moveTo( width * 0.1, drawHeight * .3 - .5 );
        ctx.lineTo( width * 0.9, drawHeight * .3 - .5 );
        ctx.stroke();
   
        // Plot easing
        ctx.strokeStyle = "white";
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.moveTo( width * 0.1, drawHeight );
        $.each( new Array( width ), function( position ) {
          var state = position / width,
            val = impl( state, position, 0, 1, width );
          ctx.lineTo( position * 0.8 + width * 0.1,
            drawHeight - drawHeight * val * 0.7 );
        });
        ctx.stroke();
   
        // Animate on click
        graph.on( "click", function() {
          wrap
            .animate( { height: "hide" }, 2000, name )
            .delay( 800 )
            .animate( { height: "show" }, 2000, name );
        });
   
        graph.width( width ).height( height + text.height() + 10 );
      });
   
    });

    $("#ocho").on("click", function(){
        // run the currently selected effect
        function runEffect() {
            // get effect type from
            var selectedEffect = $( "#effectTypes" ).val();
    
            // Most effect types need no options passed by default
            var options = {};
            // some effects have required parameters
            if ( selectedEffect === "scale" ) {
            options = { percent: 50 };
            } else if ( selectedEffect === "size" ) {
            options = { to: { width: 280, height: 185 } };
            }
    
            // Run the effect
            $( "#effect" ).show( selectedEffect, options, 500, callback );
        };
    
        //callback function to bring a hidden box back
        function callback() {
            setTimeout(function() {
            $( "#effect:visible" ).removeAttr( "style" ).fadeOut();
            }, 1000 );
        };
    
        // Set effect from select menu value
        $( "#button" ).on( "click", function() {
            runEffect();
        });
    
        $( "#effect" ).hide();

    });


    $("#nueve").on("click", function(){
        $( "#button" ).on( "click", function() {
            $( "#effect" ).removeClass( "newClass", 1000, callback );
          });
       
          function callback() {
            setTimeout(function() {
              $( "#effect" ).addClass( "newClass" );
            }, 3000 );
          }
    });

    $("#diez").on("click", function(){
        $( "#button" ).on( "click", function() {
            $( ".newClass" ).switchClass( "newClass", "anotherNewClass", 2000 );
            $( ".anotherNewClass" ).switchClass( "anotherNewClass", "newClass", 2000 );
        });
    });

    $("#once").on("click", function(){
        // run the currently selected effect
        function runEffect() {
            // get effect type from
            var selectedEffect = $( "#effectTypes" ).val();
    
            // Most effect types need no options passed by default
            var options = {};
            // some effects have required parameters
            if ( selectedEffect === "scale" ) {
            options = { percent: 50 };
            } else if ( selectedEffect === "size" ) {
            options = { to: { width: 200, height: 60 } };
            }
    
            // Run the effect
            $( "#effect" ).toggle( selectedEffect, options, 500 );
        };
    
        // Set effect from select menu value
        $( "#button" ).on( "click", function() {
            runEffect();
        });

    });

    $("#doce").on("click", function(){
        $( "#tabs" ).tabs();

    });


});