/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/**
 * Navigation module
 */
define(['ojs/ojcore', 'ojs/ojarraytabledatasource'],
  function (oj) {
    /**
     * The shared view model for navigation
     */
    function NavigationViewModel() {
      var self = this;

      // Shared navigation data for Nav Bar (medium and larger screens) and Nav List (small screens)
      var data = [
        {name: 'Find A Car', id: 'search',
          iconClass: 'demo-home-icon-24 demo-icon-font-24 oj-navigationlist-item-icon'},
        {name: 'Inbox', id: 'leaseInfo',
          iconClass: 'demo-education-icon-24 demo-icon-font-24 oj-navigationlist-item-icon'}
      ];

      self.dataSource = new oj.ArrayTableDataSource(data, {idAttribute: 'id'});
    }

    return new NavigationViewModel();
  }
);
