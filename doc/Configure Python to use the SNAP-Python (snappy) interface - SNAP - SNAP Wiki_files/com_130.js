WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-browser-metrics:browser-metrics-reporters', location = '/js/register-reporters.js' */
window["browser-metrics-plugin"].install(function(c){require("internal/browser-metrics internal/browser-metrics-aa-beacon confluence-browser-metrics/reporters/spa-transitions-reporter confluence-browser-metrics/marshallers/spa-transitions-marshaller confluence-browser-metrics/reporters/defer-js-reporter confluence-browser-metrics/marshallers/defer-js-marshaller confluence-browser-metrics/reporters/server-duration-reporter confluence-browser-metrics/marshallers/server-duration-marshaller confluence-browser-metrics/marshallers/request-correlation-id-marshaller confluence-browser-metrics/reporters/bigpipe-reporter confluence-browser-metrics/marshallers/bigpipe-marshaller confluence-browser-metrics/marshallers/page-end-marshaller confluence-browser-metrics/marshallers/spa-navigation-marshaller".split(" "),
function(b,a,d,e,f,g,h,i,j,k,l,m,n){b.addReporter(d);b.addReporter(f);b.addReporter(h);b.addReporter(k);a.addReportMarshaller(e);a.addReportMarshaller(g);a.addReportMarshaller(i);a.addReportMarshaller(j);a.addReportMarshaller(l);a.addReportMarshaller(m);a.addReportMarshaller(n);c()})});
}catch(e){WRMCB(e)};