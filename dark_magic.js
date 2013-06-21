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

//$(document).ready(function() {
//    html = "<h1>Hello World</h1>";
//    $(html).prependTo('body');
//})
