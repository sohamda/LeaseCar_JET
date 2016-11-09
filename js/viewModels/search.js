/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * search module
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'promise',
    'ojs/ojlistview', 'ojs/ojarraytabledatasource', 'ojs/ojbutton', 'ojs/ojcollectiontabledatasource',
    'ojs/ojmoduleanimations', 'ojs/ojanimation', 'ojs/ojcollapsible', 'ojs/ojmasonrylayout', 'ojs/ojpagingcontrol', 'ojs/ojfilmstrip', 'ojs/ojdialog'
], function (oj, ko) {

    var MakesFactory = {
        resourceUrl: 'https://api.edmunds.com/api/vehicle/v2/makes?fmt=json&api_key=ajbj59h95qs3pbuwb79fq2pz',

        createMakeModel: function () {
            var Make = oj.Model.extend({idAttribute: "id"});
            return new Make();
        },
        createMakeCollection: function () {

            var Makes = oj.Collection.extend({url: this.resourceUrl,
                model: this.createMakeModel(),
                parse: function (response) {
                    //console.log(response.makes.length);
                    $("#page4").addClass("demo-page4-hide");
                    return response.makes;
                }});
            return new Makes();
        }
    };

    function searchContentViewModel() {
        var self = this;
        var makeFactory = MakesFactory.createMakeCollection();
        self.models = ko.observableArray([]);
        self.years = ko.observableArray([]);
        self.styles = ko.observableArray([]);
        self.pictures = ko.observableArray([]);
        
        self.selectedMakeName = ko.observable();
        self.selectedMakeModelName = ko.observable();
        self.selectedMakeModelYearName = ko.observable();
        
        self.selectedMake = ko.observable();
        self.selectedModel = ko.observable();
        self.selectedYear = ko.observable();

        self.dataSourceMakes = ko.observable();
        self.dataSourceMakes = new oj.CollectionTableDataSource(makeFactory);
        
        this.gotoMakeList = function (event, ui) {
            $("#listviewMakes").ojListView("option", "currentItem", null);
            self.animate('#page2', 'slideIn');
            setTimeout(function () {
                $("#page1").delay(2000).toggleClass("demo-page1-hide");
                $("#page2").delay(2000).toggleClass("demo-page2-hide");
            }, 500);
        };

        this.gotoModelList = function (event, ui) {
            $("#listviewModels").ojListView("option", "currentItem", null);
            self.animate('#page3', 'slideIn');
            setTimeout(function () {
                $("#page2").delay(2000).toggleClass("demo-page2-hide");
                $("#page3").delay(2000).toggleClass("demo-page3-hide");
            }, 500);
        };
        
        this.gotoYearList = function (event, ui) {
            $("#listview").ojListView("option", "currentItem", null);
            self.animate('#page4', 'slideIn');
            setTimeout(function () {
                $("#page3").delay(2000).toggleClass("demo-page3-hide");
                $("#page4").delay(2000).addClass("demo-page4-hide");
            }, 500);
            //self.styles.removeAll();
        };

        this.gotoModelContent = function (event, ui) {
            if (ui.option === 'currentItem' && ui.value != null) {
                self.dataSourceMakes.get(ui.value).then(function (data) {
                    self.selectedMakeName(data.data.name);
                    self.selectedMake(data.data.niceName);
                    self.models(data.data.models);
                });

                self.animate('#page1', 'slideOut');
                setTimeout(function () {
                    $("#page1").delay(5000).toggleClass("demo-page1-hide");
                    $("#page2").delay(5000).toggleClass("demo-page2-hide");
                }, 500);

            }
        };

        self.dataSourceModels = ko.observable();
        self.dataSourceModels = new oj.ArrayTableDataSource(self.models, {idAttribute: "id"});

        this.gotoYearContent = function (event, ui) {
            if (ui.option === 'currentItem' && ui.value != null) {
                self.dataSourceModels.get(ui.value).then(function (data) {
                    self.selectedMakeModelName(self.selectedMakeName() + " - " + data.data.name);
                    self.selectedModel(data.data.niceName);
                    self.years(data.data.years);
                });

                self.animate('#page2', 'slideOut');
                setTimeout(function () {
                    $("#page2").delay(2000).toggleClass("demo-page2-hide");
                    $("#page3").delay(2000).toggleClass("demo-page3-hide");
                }, 500);
            }
        };

        self.dataSourceYears = ko.observable();
        self.dataSourceYears = new oj.ArrayTableDataSource(self.years, {idAttribute: "id"});

        this.gotoStyleContent = function (event, ui) {
            if (ui.option === 'currentItem' && ui.value != null) {
                self.dataSourceYears.get(ui.value).then(function (data) {
                    self.selectedMakeModelYearName(self.selectedMakeModelName() + " - " + data.data.year);
                    self.selectedYear(data.data.year);
                    var apiToCall = "https://api.edmunds.com/api/vehicle/v2/" + self.selectedMake() + "/" + self.selectedModel() + "/" + self.selectedYear() + "/styles?fmt=json&api_key=ajbj59h95qs3pbuwb79fq2pz&view=full";
                    console.log(apiToCall);
                    $.getJSON(apiToCall).then(function (allStyles) {
                        console.log(allStyles.styles);
                        self.styles(allStyles.styles);
                    }); 
                    self.animate('#page3', 'slideOut');
                    setTimeout(function () {
                        $("#page3").delay(2000).toggleClass("demo-page3-hide");
                        $("#page4").delay(2000).removeClass("demo-page4-hide");
                    }, 500);
                });
            }
        };

        self.animate = function (divId, effect) {
            if (effect && oj.AnimationUtils[effect]) {
                var jElem = $(divId);
                var animateOptions = {'timingFunction': 'ease-in-out'};
                oj.AnimationUtils[effect](jElem[0], animateOptions);
            }
        };
            
        self.dataSourceStyles = ko.observable();
        self.dataSourceStyles = new oj.ArrayTableDataSource(self.styles, {idAttribute: "id"});
        
        getTileId = function(index) {
          return 'tile' + (index + 1);
        };      
        
        showPictures = function(data) {   
            self.pictures.removeAll();
            var styleId = data.id;
            var apiToCall = "https://api.edmunds.com/v1/api/vehiclephoto/service/findphotosbystyleid?fmt=json&api_key=ajbj59h95qs3pbuwb79fq2pz&styleId=" + styleId;
            console.log(apiToCall);              
            $.getJSON(apiToCall).then(function (allPictures) {
                  console.log(allPictures.length);
                  var tempArr = [];
                  allPictures.forEach(function(eachPicture) {
                      console.log(eachPicture.photoSrcs.length);
                      eachPicture.photoSrcs.forEach(function(eachSrc) {                          
                          if(eachSrc.endsWith('_276.jpg')) {
                              console.log(eachSrc);
                              var srcLink = "https://media.ed.edmunds-media.com" + eachSrc;
                              tempArr.push(srcLink);
                          }
                      });
                  });
                  console.log(tempArr.length);
                  self.pictures(tempArr);
                  console.log(self.pictures.length);
                  $("#modalDialog1").ojDialog("open"); 
                  $('#filmStrip').ojFilmStrip("destroy");  
                  $('#filmStrip').ojFilmStrip({'arrowVisibility': 'hover'});  
                  return true;  
            });             
            
        };

        closeDialog = function() {
            $("#modalDialog1").ojDialog("close"); 
        };
    }

    return searchContentViewModel;
});
