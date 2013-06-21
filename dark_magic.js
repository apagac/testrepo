function dark_magic() {
function wrap(str, link) {
    return "<a href='" + link + "' target='_blank'>" + str + "</a>";
};

links = new Object();
links.pages = {};
links.pages.infrastructure = "https://github.com/RedHatQE/cfme_pages/blob/master/pages/infrastructure.py";
links.pages.page = "https://github.com/RedHatQE/cfme_pages/blob/master/pages/page.py";
links.pages.configuration = "https://github.com/RedHatQE/cfme_pages/blob/master/pages/configuration.py";
links.pages.virtual_intelligence = "https://github.com/RedHatQE/cfme_pages/blob/master/pages/virtual_intelligence.py";
links.pages.regions = {};
links.pages.regions.quadicons = "https://github.com/RedHatQE/cfme_pages/blob/master/pages/regions/quadicons.py";
links.pages.regions.quadiconitems = "https://github.com/RedHatQE/cfme_pages/blob/master/pages/regions/quadiconitem.py";
links.pages.regions.accordion = "https://github.com/RedHatQE/cfme_pages/blob/master/pages/regions/accordion.py";
links.pages.regions.accordionitem = "https://github.com/RedHatQE/cfme_pages/blob/master/pages/regions/accordionitem.py";
links.pages.regions.taskbar = {};
links.pages.regions.taskbar.center = "https://github.com/RedHatQE/cfme_pages/blob/master/pages/regions/taskbar/center.py";
links.pages.regions.twisty = "https://github.com/RedHatQE/cfme_pages/blob/master/pages/regions/twisty.py";
links.pages.regions.tree = "https://github.com/RedHatQE/cfme_pages/blob/master/pages/regions/tree.py";
links.pages.regions.treeaccordionitem = "https://github.com/RedHatQE/cfme_pages/blob/master/pages/regions/treeaccordionitem.py";
links.tests = {};
links.tests.infrastructure_datastores = "https://github.com/RedHatQE/cfme_pages/blob/master/tests/test_infrastructure_datastores.py";
links.tests.infra_pxe_server = "https://github.com/RedHatQE/cfme_pages/blob/master/tests/test_infra_pxe_server.py";
links.tests.accordion = "https://github.com/RedHatQE/cfme_pages/blob/master/tests/test_accordion.py";
links.tests.infra_template = "https://github.com/RedHatQE/cfme_pages/blob/master/tests/test_infra_template.py";

 var inArea,
            map = $('#image'),
            captions = {
                quadicons: ["Quadicons",
                  wrap("pages/regions/quadicons.py", links.pages.regions.quadicons) + "<br>"
                      + "uses " + wrap("pages/regions/quadiconitem.py", links.pages.regions.quadiconitems) + "<br>"
                      + "<br>"
                      + "sample pages usage: " + wrap("pages/infrastructure.py", links.pages.infrastructure) + ", Infrastructure.ManagementSystems.quadicon_region <br>"
                      + "sample test usage: " + wrap("tests/test_infrastructure_datastores.py", links.tests.infrastructure_datastores)],
                dropdown: ["Dropdown menu",
                  wrap("pages/page.py", links.pages.page) + ", Page.select_dropdown <br>" 
                    + "<br>"
                    + "sample pages usage: " + wrap("pages/infrastructure.py", links.pages.infrastructure) + ", Infrastructure.ManagementSystemsAdd.select_management_system_type"],
                configuration: ["Configuration button",
                  wrap("pages/regions/taskbar/center", links.pages.regions.taskbar.center) + ", CenterButtons.configuration_button <br>"
                    + "<br>"
                    + "sample pages usage: " + wrap("pages/infrastructure.py", links.pages.infrastructure) + ", Infrastructure.PXE.center_buttons <br>"
                    + "sample test usage: " + wrap("tests/test_infra_pxe_server.py", links.tests.infra_pxe_server) + "<br>"
                    + "<br>"
                    + "After a click on 'configuration', you must click on desired item."],
                accordion: ["Accordion",
                  wrap("pages/regions/accordion.py", links.pages.regions.accordion) + ", " + wrap("pages/regions/accordionitem.py", links.pages.regions.accordionitem) + "<br>"
                    + "<br>"
                    + "sample pages usage: " + wrap("pages/configuration.py", links.pages.configuration) + " Configuration.Configuration.accordion <br>"
                    + "                    " + wrap("pages/virtual_intelligence.py", links.pages.virtual_intelligence) + " VirtualIntelligence.Reports.accordion <br>"
                    + "sample test usage: " + wrap("tests/test_accordion.py", links.tests.accordion) + " <br>" ],
                accordionItem: ["Accordion Item",
                  wrap("pages/regions/accordionintem.py", links.pages.regions.accordionitem) + " <br>"
                    + "<br>"
                    + "sample pages usage: " + wrap("pages/configuration.py", links.pages.configuration) + " Configuration.Configuration.accordion <br>"
                    + "                    " + wrap("pages/virtual_intelligence.py", links.pages.virtual_intelligence) + " VirtualIntelligence.Reports.accordion <br>"
                    + "sample test usage: " + wrap("tests/test_accordion.py", links.tests.accordion) + " <br>" ],
                twisty: ["Twisty",
                  wrap("pages/regions/twisty.py", links.pages.regions.twisty) + " <br>"
                    + "<br>"
                    + "By default imported into " + wrap("pages/regions/tree.py", links.pages.regions.tree) + " <br>"
                    + "which is imported into " + wrap("pages/regions/treeaccordionitem.py", links.pages.regions.treeaccordionitem) + " <br>"
                    + "which is used with " + wrap("pages/regions/accordion.py", links.pages.regions.accordion) + " <br>"
                    + "<br>"
                    + "sample pages usage: " + wrap("pages/infrastructure.py", links.pages.infrastructure) + ", Infrastructure.PXE.accordion_region <br>"
                    + "sample test usage: " + wrap("tests/test_infra_template.py", links.tests.infra_template) + " <br>" ],
                tree: ["Tree",
                  wrap("pages/regions/tree.py", links.pages.regions.tree) + " <br>"
                    + "<br>"
                    + "Used with TreeAccordionItem: " + wrap("pages/regions/TreeAccordionItem.py", links.pages.regions.treeaccordionitem) + " <br>"
                    + "and in accordion: " + wrap("pages/regions/accordion.py", links.pages.regions.accordion) + " <br>"
                    + "<br>"
                    + "sample pages usage: " + wrap("pages/infrastructure.py", links.pages.infrastructure) + " Infrastructure.PXE.accordion_region <br>"
                    + "sample test usage: " + wrap("tests/test_infra_template.py", links.tests.infra_template) + " <br>" ]
            },
            single_opts = {
                fillColor: '000000',
                fillOpacity: 0,
                stroke: true,
                strokeColor: '00ff00',
                strokeWidth: 2
            },
            all_opts = {
                fillColor: 'ffffff',
                fillOpacity: 0,
                stroke: true,
                strokeWidth: 2,
                strokeColor: 'ff0000'
            },
            initial_opts = {
                mapKey: 'data-name',
                isSelectable: false,
                //onMouseover: function (data) {
                //    inArea = true;
                //    $('#caption-header').text(captions[data.key][0]);
                    //$('#caption-text').text(captions[data.key][1]);
                //    $('#caption-text').html(captions[data.key][1]);
                //    $('#caption').show();
                //},
                //onMouseout: function (data) {
                //    inArea = false;
                //    $('#caption').hide();
                //},
                onClick: function (data) {
                    $('#caption-header').text(captions[data.key][0]);
                    $('#caption-text').html(captions[data.key][1]);
                    $('#caption').show();
                }
            },

        opts = $.extend({}, all_opts, initial_opts, single_opts);


        map.mapster('unbind')
            .mapster(opts)
            .bind('mouseover', function () {
                if (!inArea) {
                    map.mapster('set_options', all_opts)
                       .mapster('set', true, 'all')
                       .mapster('set_options', single_opts);
                }
            }).bind('mouseout', function () {
                if (!inArea) {
                    map.mapster('set', false, 'all');
                }
            });
}

$(document).ready(function() {
    main_menus = '<area shape="rect" coords="181,71,273,101" href="services.html" alt="Services" title="Services" />'
    + '<area shape="rect" coords="277,71,406,101" href="infrastructure.html" alt="Infrastructure" title="Infrastructure" />'
    + '<area shape="rect" coords="410,71,491,101" href="control.html" alt="Control" title="Control" />'
    + '<area shape="rect" coords="494,71,595,101" href="automate.html" alt="Automate" title="Automate" />'
    + '<area shape="rect" coords="598,71,694,101" href="optimize.html" alt="Optimize" title="Optimize" />'
    + '<area shape="rect" coords="696,71,748,101" href="configure.html" alt="Configure" title="Configure" />'
    + '<area shape="rect" coords="14,71,180,101" href="index.html" alt="Virtual Intelligence" title="Virtual Intelligence" />'

    if (document.title == "Automate") {
        second_menus = '<area shape="rect" coords="500,111,574,130" href="automate.html" alt="Explorer" title="Explorer" />'
        + '<area shape="rect" coords="588,111,673,130" href="automate_simulation.html" alt="Simulation" title="Simulation" />'
        + '<area shape="rect" coords="689,111,801,130" href="automate_customization.html" alt="Customization" title="Customization" />'
        + '<area shape="rect" coords="816,111,938,130" href="automate_import_export.html" alt="Import/Export" title="Import/Export" />'
        + '<area shape="rect" coords="951,111,991,130" href="automate_log.html" alt="Log" title="Log" />'
        + '<area shape="rect" coords="1004,111,1084,130" href="automate_requests.html" alt="Requests" title="Requests" />'

        $(second_menus).prependTo('map');
    }
    else if (document.title == "Virtual Intelligence") {
        second_menus = '<area shape="rect" coords="17,111,115,130" href="index.html" alt="Dashboard" title="Dashboard" />'
        + '<area shape="rect" coords="127,111,192,130" href="virtual_intelligence_reports.html" alt="Reports" title="Reports" />'
        + '<area shape="rect" coords="207,111,262,130" href="virtual_intelligence_usage.html" alt="Usage" title="Usage" />'
        + '<area shape="rect" coords="279,111,377,130" href="virtual_intelligence_chargeback.html" alt="Chargeback" title="Chargeback" />'
        + '<area shape="rect" coords="390,111,470,130" href="virtual_intelligence_timelines.html" alt="Timelines" title="Timelines" />'
        + '<area shape="rect" coords="483,111,521,130" href="virtual_intelligence_rss.html" alt="RSS" title="RSS" />'

        $(second_menus).prependTo('map');
    }
    else if (document.title == "Services") {
        second_menus = '<area shape="rect" coords="186,111,292,130" href="services.html" alt="My Services" title="My Services" />'
        + '<area shape="rect" coords="301,111,378,130" href="services_catalogs.html" alt="Catalogs" title="Catalogs" />'
        + '<area shape="rect" coords="388,111,471,130" href="services_requests.html" alt="Requests" title="Requests" />'
        + '<area shape="rect" coords="481,111,616,130" href="services_virtual_machines.html" alt="Virtual Machines" title="Virtual Machines" />'

        $(second_menus).prependTo('map');
    }
    else if (document.title == "Infrastructure") {
        second_menus = '<area shape="rect" coords="280,111,463,130" href="infrastructure.html" alt="Management Systems" title="Management Systems" />'
        + '<area shape="rect" coords="472,111,545,130" href="infrastructure_clusters.html" alt="Clusters" title="Clusters" />'
        + '<area shape="rect" coords="554,111,609,130" href="infrastructure_hosts.html" alt="Hosts" title="Hosts" />'
        + '<area shape="rect" coords="620,111,745,130" href="infrastructure_resource_pools.html" alt="Resource Pools" title="Resource Pools" />'
        + '<area shape="rect" coords="757,111,852,130" href="infrastructure_datastores.html" alt="Datastores" title="Datastores" />'
        + '<area shape="rect" coords="860,111,968,130" href="infrastructure_repositories.html" alt="Repositories" title="Repositories" />'
        + '<area shape="rect" coords="979,111,1022,130" href="infrastructure_pxe.html" alt="PXE" title="PXE" />'
        + '<area shape="rect" coords="1031,111,1113,130" href="infrastructure_requests.html" alt="Requests" title="Requests" />'

        $(second_menus).prependTo('map');
    }
    else if (document.title == "Control") {
        second_menus = '<area shape="rect" coords="412,111,491,130" href="control.html" alt="Explorer" title="Explorer" />'
        + '<area shape="rect" coords="501,111,590,130" href="control_simulation.html" alt="Simulation" title="Simulation" />'
        + '<area shape="rect" coords="603,111,725,130" href="control_import_export.html" alt="Import/Export" title="Import/Export" />'
        + '<area shape="rect" coords="738,111,778,130" href="control_log.html" alt="Log" title="Log" />'

        $(second_menus).prependTo('map');
    }
    else if (document.title == "Optimize") {
        second_menus = '<area shape="rect" coords="602,111,694,130" href="optimize.html" alt="Utilization" title="Utilization" />'
        + '<area shape="rect" coords="704,111,776,130" href="optimize_planning.html" alt="Planning" title="Planning" />'
        + '<area shape="rect" coords="790,111,889,130" href="optimize_bottlenecks.html" alt="Bottlenecks" title="Bottlenecks" />'

        $(second_menus).prependTo('map');
    }
    else if (document.title == "Configure") {
        second_menus = '<area shape="rect" coords="699,111,807,130" href="configure.html" alt="My Settings" title="My Settings" />'
        + '<area shape="rect" coords="815,111,865,130" href="configure_tasks.html" alt="Tasks" title="Tasks" />'
        + '<area shape="rect" coords="878,111,988,130" href="configure_configuration.html" alt="Configuration" title="Configuration" />'
        + '<area shape="rect" coords="1002,111,1111,130" href="configure_smartproxies.html" alt="SmartProxies" title="SmartProxies" />'
        + '<area shape="rect" coords="1124,111,1179,130" href="configure_about.html" alt="About" title="About" />'

        $(second_menus).prependTo('map');
    }


    $(main_menus).prependTo('map');
})
