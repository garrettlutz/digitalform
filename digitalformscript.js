var gybFSFormName = 'form' + $('input[name="form"]').val();
         var gybFSForm = window[gybFSFormName];
         
         $('#gyb-go-button').bind("click", $.proxy(function(e) {
             e.preventDefault();
             this.nextPage();
             
         }, gybFSForm));