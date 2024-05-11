
window.projectVersion = 'master';

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:Inphinit" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Inphinit.html">Inphinit</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Inphinit_Dom" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Inphinit/Dom.html">Dom</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Inphinit_Dom_Document" class="opened">                    <div style="padding-left:44px" class="hd leaf">                        <a href="Inphinit/Dom/Document.html">Document</a>                    </div>                </li>                            <li data-name="class:Inphinit_Dom_DomException" class="opened">                    <div style="padding-left:44px" class="hd leaf">                        <a href="Inphinit/Dom/DomException.html">DomException</a>                    </div>                </li>                            <li data-name="class:Inphinit_Dom_Selector" class="opened">                    <div style="padding-left:44px" class="hd leaf">                        <a href="Inphinit/Dom/Selector.html">Selector</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Inphinit_Experimental" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Inphinit/Experimental.html">Experimental</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Inphinit_Experimental_Dir" class="opened">                    <div style="padding-left:44px" class="hd leaf">                        <a href="Inphinit/Experimental/Dir.html">Dir</a>                    </div>                </li>                            <li data-name="class:Inphinit_Experimental_Form" class="opened">                    <div style="padding-left:44px" class="hd leaf">                        <a href="Inphinit/Experimental/Form.html">Form</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Inphinit_Http" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Inphinit/Http.html">Http</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Inphinit_Http_Negotiation" class="opened">                    <div style="padding-left:44px" class="hd leaf">                        <a href="Inphinit/Http/Negotiation.html">Negotiation</a>                    </div>                </li>                            <li data-name="class:Inphinit_Http_Redirect" class="opened">                    <div style="padding-left:44px" class="hd leaf">                        <a href="Inphinit/Http/Redirect.html">Redirect</a>                    </div>                </li>                            <li data-name="class:Inphinit_Http_Request" class="opened">                    <div style="padding-left:44px" class="hd leaf">                        <a href="Inphinit/Http/Request.html">Request</a>                    </div>                </li>                            <li data-name="class:Inphinit_Http_Response" class="opened">                    <div style="padding-left:44px" class="hd leaf">                        <a href="Inphinit/Http/Response.html">Response</a>                    </div>                </li>                            <li data-name="class:Inphinit_Http_Status" class="opened">                    <div style="padding-left:44px" class="hd leaf">                        <a href="Inphinit/Http/Status.html">Status</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Inphinit_Routing" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Inphinit/Routing.html">Routing</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Inphinit_Routing_Group" class="opened">                    <div style="padding-left:44px" class="hd leaf">                        <a href="Inphinit/Routing/Group.html">Group</a>                    </div>                </li>                            <li data-name="class:Inphinit_Routing_Quick" class="opened">                    <div style="padding-left:44px" class="hd leaf">                        <a href="Inphinit/Routing/Quick.html">Quick</a>                    </div>                </li>                            <li data-name="class:Inphinit_Routing_Redirector" class="opened">                    <div style="padding-left:44px" class="hd leaf">                        <a href="Inphinit/Routing/Redirector.html">Redirector</a>                    </div>                </li>                            <li data-name="class:Inphinit_Routing_Rest" class="opened">                    <div style="padding-left:44px" class="hd leaf">                        <a href="Inphinit/Routing/Rest.html">Rest</a>                    </div>                </li>                            <li data-name="class:Inphinit_Routing_Route" class="opened">                    <div style="padding-left:44px" class="hd leaf">                        <a href="Inphinit/Routing/Route.html">Route</a>                    </div>                </li>                            <li data-name="class:Inphinit_Routing_Router" class="opened">                    <div style="padding-left:44px" class="hd leaf">                        <a href="Inphinit/Routing/Router.html">Router</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Inphinit_Viewing" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Inphinit/Viewing.html">Viewing</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Inphinit_Viewing_View" class="opened">                    <div style="padding-left:44px" class="hd leaf">                        <a href="Inphinit/Viewing/View.html">View</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:Inphinit_App" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Inphinit/App.html">App</a>                    </div>                </li>                            <li data-name="class:Inphinit_Cache" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Inphinit/Cache.html">Cache</a>                    </div>                </li>                            <li data-name="class:Inphinit_Config" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Inphinit/Config.html">Config</a>                    </div>                </li>                            <li data-name="class:Inphinit_Debug" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Inphinit/Debug.html">Debug</a>                    </div>                </li>                            <li data-name="class:Inphinit_Exception" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Inphinit/Exception.html">Exception</a>                    </div>                </li>                            <li data-name="class:Inphinit_File" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Inphinit/File.html">File</a>                    </div>                </li>                            <li data-name="class:Inphinit_Helper" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Inphinit/Helper.html">Helper</a>                    </div>                </li>                            <li data-name="class:Inphinit_Maintenance" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Inphinit/Maintenance.html">Maintenance</a>                    </div>                </li>                            <li data-name="class:Inphinit_Packages" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Inphinit/Packages.html">Packages</a>                    </div>                </li>                            <li data-name="class:Inphinit_Regex" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Inphinit/Regex.html">Regex</a>                    </div>                </li>                            <li data-name="class:Inphinit_Session" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Inphinit/Session.html">Session</a>                    </div>                </li>                            <li data-name="class:Inphinit_Shell" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Inphinit/Shell.html">Shell</a>                    </div>                </li>                            <li data-name="class:Inphinit_Storage" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Inphinit/Storage.html">Storage</a>                    </div>                </li>                            <li data-name="class:Inphinit_Uri" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Inphinit/Uri.html">Uri</a>                    </div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "Inphinit.html", "name": "Inphinit", "doc": "Namespace Inphinit"},{"type": "Namespace", "link": "Inphinit/Dom.html", "name": "Inphinit\\Dom", "doc": "Namespace Inphinit\\Dom"},{"type": "Namespace", "link": "Inphinit/Experimental.html", "name": "Inphinit\\Experimental", "doc": "Namespace Inphinit\\Experimental"},{"type": "Namespace", "link": "Inphinit/Http.html", "name": "Inphinit\\Http", "doc": "Namespace Inphinit\\Http"},{"type": "Namespace", "link": "Inphinit/Routing.html", "name": "Inphinit\\Routing", "doc": "Namespace Inphinit\\Routing"},{"type": "Namespace", "link": "Inphinit/Viewing.html", "name": "Inphinit\\Viewing", "doc": "Namespace Inphinit\\Viewing"},
            
            {"type": "Class", "fromName": "Inphinit", "fromLink": "Inphinit.html", "link": "Inphinit/App.html", "name": "Inphinit\\App", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Inphinit\\App", "fromLink": "Inphinit/App.html", "link": "Inphinit/App.html#method_env", "name": "Inphinit\\App::env", "doc": "&quot;Set or get environment value&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\App", "fromLink": "Inphinit/App.html", "link": "Inphinit/App.html#method_trigger", "name": "Inphinit\\App::trigger", "doc": "&quot;Trigger registered event&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\App", "fromLink": "Inphinit/App.html", "link": "Inphinit/App.html#method_state", "name": "Inphinit\\App::state", "doc": "&quot;Return application state&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\App", "fromLink": "Inphinit/App.html", "link": "Inphinit/App.html#method_on", "name": "Inphinit\\App::on", "doc": "&quot;Register an event&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\App", "fromLink": "Inphinit/App.html", "link": "Inphinit/App.html#method_off", "name": "Inphinit\\App::off", "doc": "&quot;Unregister 1 or all events&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\App", "fromLink": "Inphinit/App.html", "link": "Inphinit/App.html#method_stop", "name": "Inphinit\\App::stop", "doc": "&quot;Stop application, send HTTP status&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\App", "fromLink": "Inphinit/App.html", "link": "Inphinit/App.html#method_exec", "name": "Inphinit\\App::exec", "doc": "&quot;Start application using routes&quot;"},
            
            {"type": "Class", "fromName": "Inphinit", "fromLink": "Inphinit.html", "link": "Inphinit/Cache.html", "name": "Inphinit\\Cache", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Inphinit\\Cache", "fromLink": "Inphinit/Cache.html", "link": "Inphinit/Cache.html#method___construct", "name": "Inphinit\\Cache::__construct", "doc": "&quot;Create a cache instance by route path&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Cache", "fromLink": "Inphinit/Cache.html", "link": "Inphinit/Cache.html#method_allowHeaders", "name": "Inphinit\\Cache::allowHeaders", "doc": "&quot;Check if is HEAD or GET, you can overwrite this method&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Cache", "fromLink": "Inphinit/Cache.html", "link": "Inphinit/Cache.html#method_finish", "name": "Inphinit\\Cache::finish", "doc": "&quot;Write cache&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Cache", "fromLink": "Inphinit/Cache.html", "link": "Inphinit/Cache.html#method_match", "name": "Inphinit\\Cache::match", "doc": "&quot;Check &lt;code&gt;HTTP_IF_MODIFIED_SINCE&lt;\/code&gt; and &lt;code&gt;HTTP_IF_NONE_MATCH&lt;\/code&gt; from server\nIf true you can send &lt;code&gt;304 Not Modified&lt;\/code&gt;&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Cache", "fromLink": "Inphinit/Cache.html", "link": "Inphinit/Cache.html#method_cached", "name": "Inphinit\\Cache::cached", "doc": "&quot;Checks if page (from route) is already cached.&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Cache", "fromLink": "Inphinit/Cache.html", "link": "Inphinit/Cache.html#method_write", "name": "Inphinit\\Cache::write", "doc": "&quot;Write data in cache file.&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Cache", "fromLink": "Inphinit/Cache.html", "link": "Inphinit/Cache.html#method_show", "name": "Inphinit\\Cache::show", "doc": "&quot;Show cache content from current page (from route) in output&quot;"},
            
            {"type": "Class", "fromName": "Inphinit", "fromLink": "Inphinit.html", "link": "Inphinit/Config.html", "name": "Inphinit\\Config", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Inphinit\\Config", "fromLink": "Inphinit/Config.html", "link": "Inphinit/Config.html#method___construct", "name": "Inphinit\\Config::__construct", "doc": "&quot;Return items from a config file in a object (iterator or with -&gt;)&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Config", "fromLink": "Inphinit/Config.html", "link": "Inphinit/Config.html#method_load", "name": "Inphinit\\Config::load", "doc": "&quot;Create a Negotiation instance&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Config", "fromLink": "Inphinit/Config.html", "link": "Inphinit/Config.html#method_reload", "name": "Inphinit\\Config::reload", "doc": "&quot;Reload configuration from file&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Config", "fromLink": "Inphinit/Config.html", "link": "Inphinit/Config.html#method_save", "name": "Inphinit\\Config::save", "doc": "&quot;Reload configuration from file&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Config", "fromLink": "Inphinit/Config.html", "link": "Inphinit/Config.html#method_get", "name": "Inphinit\\Config::get", "doc": "&quot;Get all values like array or get specific item by level (multidimensional) using path&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Config", "fromLink": "Inphinit/Config.html", "link": "Inphinit/Config.html#method_set", "name": "Inphinit\\Config::set", "doc": "&quot;Set value by path in specific level (multidimensional)&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Config", "fromLink": "Inphinit/Config.html", "link": "Inphinit/Config.html#method___get", "name": "Inphinit\\Config::__get", "doc": "&quot;Magic method for get specific item by -&gt;&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Config", "fromLink": "Inphinit/Config.html", "link": "Inphinit/Config.html#method___set", "name": "Inphinit\\Config::__set", "doc": "&quot;Magic method for set value (this method don&#039;t save data)&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Config", "fromLink": "Inphinit/Config.html", "link": "Inphinit/Config.html#method___isset", "name": "Inphinit\\Config::__isset", "doc": "&quot;Magic method for check if value exists in top-level&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Config", "fromLink": "Inphinit/Config.html", "link": "Inphinit/Config.html#method___unset", "name": "Inphinit\\Config::__unset", "doc": "&quot;Magic method for unset variable with &lt;code&gt;unset()&lt;\/code&gt; function&quot;"},
            
            {"type": "Class", "fromName": "Inphinit", "fromLink": "Inphinit.html", "link": "Inphinit/Debug.html", "name": "Inphinit\\Debug", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Inphinit\\Debug", "fromLink": "Inphinit/Debug.html", "link": "Inphinit/Debug.html#method_unregister", "name": "Inphinit\\Debug::unregister", "doc": "&quot;Unregister debug events&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Debug", "fromLink": "Inphinit/Debug.html", "link": "Inphinit/Debug.html#method_renderError", "name": "Inphinit\\Debug::renderError", "doc": "&quot;Render a View to error&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Debug", "fromLink": "Inphinit/Debug.html", "link": "Inphinit/Debug.html#method_renderPerformance", "name": "Inphinit\\Debug::renderPerformance", "doc": "&quot;Render a View to show performance, memory and time to display page&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Debug", "fromLink": "Inphinit/Debug.html", "link": "Inphinit/Debug.html#method_renderClasses", "name": "Inphinit\\Debug::renderClasses", "doc": "&quot;Render a View to show performance and show declared classes&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Debug", "fromLink": "Inphinit/Debug.html", "link": "Inphinit/Debug.html#method_view", "name": "Inphinit\\Debug::view", "doc": "&quot;Register a debug views&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Debug", "fromLink": "Inphinit/Debug.html", "link": "Inphinit/Debug.html#method_performance", "name": "Inphinit\\Debug::performance", "doc": "&quot;Get memory usage and you can also use it to calculate runtime.&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Debug", "fromLink": "Inphinit/Debug.html", "link": "Inphinit/Debug.html#method_classes", "name": "Inphinit\\Debug::classes", "doc": "&quot;Get declared classes&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Debug", "fromLink": "Inphinit/Debug.html", "link": "Inphinit/Debug.html#method_source", "name": "Inphinit\\Debug::source", "doc": "&quot;Get snippet from a file&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Debug", "fromLink": "Inphinit/Debug.html", "link": "Inphinit/Debug.html#method_caller", "name": "Inphinit\\Debug::caller", "doc": "&quot;Get backtrace php scripts&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Debug", "fromLink": "Inphinit/Debug.html", "link": "Inphinit/Debug.html#method_searcherror", "name": "Inphinit\\Debug::searcherror", "doc": "&quot;Convert error message in a link, see &lt;code&gt;system\/config\/debug.php&lt;\/code&gt;&quot;"},
            
            {"type": "Class", "fromName": "Inphinit\\Dom", "fromLink": "Inphinit/Dom.html", "link": "Inphinit/Dom/Document.html", "name": "Inphinit\\Dom\\Document", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Inphinit\\Dom\\Document", "fromLink": "Inphinit/Dom/Document.html", "link": "Inphinit/Dom/Document.html#method___construct", "name": "Inphinit\\Dom\\Document::__construct", "doc": "&quot;Create a Document instance&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Dom\\Document", "fromLink": "Inphinit/Dom/Document.html", "link": "Inphinit/Dom/Document.html#method_reporting", "name": "Inphinit\\Dom\\Document::reporting", "doc": "&quot;Set level error for exception, set &lt;code&gt;LIBXML_ERR_NONE&lt;\/code&gt; (or &lt;code&gt;0&lt;\/code&gt; - zero) for disable exceptions.&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Dom\\Document", "fromLink": "Inphinit/Dom/Document.html", "link": "Inphinit/Dom/Document.html#method_fromArray", "name": "Inphinit\\Dom\\Document::fromArray", "doc": "&quot;Convert a array in node elements&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Dom\\Document", "fromLink": "Inphinit/Dom/Document.html", "link": "Inphinit/Dom/Document.html#method_toJson", "name": "Inphinit\\Dom\\Document::toJson", "doc": "&quot;Convert DOM to JSON string&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Dom\\Document", "fromLink": "Inphinit/Dom/Document.html", "link": "Inphinit/Dom/Document.html#method_toArray", "name": "Inphinit\\Dom\\Document::toArray", "doc": "&quot;Convert DOM to Array&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Dom\\Document", "fromLink": "Inphinit/Dom/Document.html", "link": "Inphinit/Dom/Document.html#method___toString", "name": "Inphinit\\Dom\\Document::__toString", "doc": "&quot;Magic method, return a well-formed XML string&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Dom\\Document", "fromLink": "Inphinit/Dom/Document.html", "link": "Inphinit/Dom/Document.html#method_getNamespaces", "name": "Inphinit\\Dom\\Document::getNamespaces", "doc": "&quot;Get namespace attributes from root element or specific element&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Dom\\Document", "fromLink": "Inphinit/Dom/Document.html", "link": "Inphinit/Dom/Document.html#method_loadXML", "name": "Inphinit\\Dom\\Document::loadXML", "doc": "&quot;Load XML from a string&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Dom\\Document", "fromLink": "Inphinit/Dom/Document.html", "link": "Inphinit/Dom/Document.html#method_load", "name": "Inphinit\\Dom\\Document::load", "doc": "&quot;Load XML from a file&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Dom\\Document", "fromLink": "Inphinit/Dom/Document.html", "link": "Inphinit/Dom/Document.html#method_loadHTML", "name": "Inphinit\\Dom\\Document::loadHTML", "doc": "&quot;Load HTML from a string&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Dom\\Document", "fromLink": "Inphinit/Dom/Document.html", "link": "Inphinit/Dom/Document.html#method_loadHTMLFile", "name": "Inphinit\\Dom\\Document::loadHTMLFile", "doc": "&quot;Load HTML from a file&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Dom\\Document", "fromLink": "Inphinit/Dom/Document.html", "link": "Inphinit/Dom/Document.html#method_query", "name": "Inphinit\\Dom\\Document::query", "doc": "&quot;Use query-selector like CSS, jQuery, querySelectorAll&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Dom\\Document", "fromLink": "Inphinit/Dom/Document.html", "link": "Inphinit/Dom/Document.html#method_first", "name": "Inphinit\\Dom\\Document::first", "doc": "&quot;Use query-selector like CSS, jQuery, querySelector&quot;"},
            
            {"type": "Class", "fromName": "Inphinit\\Dom", "fromLink": "Inphinit/Dom.html", "link": "Inphinit/Dom/DomException.html", "name": "Inphinit\\Dom\\DomException", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Inphinit\\Dom\\DomException", "fromLink": "Inphinit/Dom/DomException.html", "link": "Inphinit/Dom/DomException.html#method___construct", "name": "Inphinit\\Dom\\DomException::__construct", "doc": "&quot;Raise an exception&quot;"},
            
            {"type": "Class", "fromName": "Inphinit\\Dom", "fromLink": "Inphinit/Dom.html", "link": "Inphinit/Dom/Selector.html", "name": "Inphinit\\Dom\\Selector", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Inphinit\\Dom\\Selector", "fromLink": "Inphinit/Dom/Selector.html", "link": "Inphinit/Dom/Selector.html#method_count", "name": "Inphinit\\Dom\\Selector::count", "doc": "&quot;Count all nodes matching the given CSS selector&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Dom\\Selector", "fromLink": "Inphinit/Dom/Selector.html", "link": "Inphinit/Dom/Selector.html#method_get", "name": "Inphinit\\Dom\\Selector::get", "doc": "&quot;Returns a \\DOMNodeList containing all nodes matching the given CSS selector&quot;"},
            
            {"type": "Class", "fromName": "Inphinit", "fromLink": "Inphinit.html", "link": "Inphinit/Exception.html", "name": "Inphinit\\Exception", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Inphinit\\Exception", "fromLink": "Inphinit/Exception.html", "link": "Inphinit/Exception.html#method___construct", "name": "Inphinit\\Exception::__construct", "doc": "&quot;Raise an exception&quot;"},
            
            {"type": "Class", "fromName": "Inphinit\\Experimental", "fromLink": "Inphinit/Experimental.html", "link": "Inphinit/Experimental/Dir.html", "name": "Inphinit\\Experimental\\Dir", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Inphinit\\Experimental\\Dir", "fromLink": "Inphinit/Experimental/Dir.html", "link": "Inphinit/Experimental/Dir.html#method___construct", "name": "Inphinit\\Experimental\\Dir::__construct", "doc": "&quot;Return items from a folder&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Experimental\\Dir", "fromLink": "Inphinit/Experimental/Dir.html", "link": "Inphinit/Experimental/Dir.html#method_root", "name": "Inphinit\\Experimental\\Dir::root", "doc": "&quot;Return items from root project folder (probably, will depend on the setting\nof the &lt;code&gt;INPHINIT_ROOT&lt;\/code&gt; constant)&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Experimental\\Dir", "fromLink": "Inphinit/Experimental/Dir.html", "link": "Inphinit/Experimental/Dir.html#method_storage", "name": "Inphinit\\Experimental\\Dir::storage", "doc": "&quot;Return items from storage folder&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Experimental\\Dir", "fromLink": "Inphinit/Experimental/Dir.html", "link": "Inphinit/Experimental/Dir.html#method_application", "name": "Inphinit\\Experimental\\Dir::application", "doc": "&quot;Return items from application folder&quot;"},
            
            {"type": "Class", "fromName": "Inphinit\\Experimental", "fromLink": "Inphinit/Experimental.html", "link": "Inphinit/Experimental/Form.html", "name": "Inphinit\\Experimental\\Form", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Inphinit\\Experimental\\Form", "fromLink": "Inphinit/Experimental/Form.html", "link": "Inphinit/Experimental/Form.html#method_xhtml", "name": "Inphinit\\Experimental\\Form::xhtml", "doc": "&quot;Define new forms for use xhtml (&lt;code&gt;&amp;lt;input \/&amp;gt;&lt;\/code&gt;) or html format (&lt;code&gt;&amp;lt;input&amp;gt;&lt;\/code&gt;)&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Experimental\\Form", "fromLink": "Inphinit/Experimental/Form.html", "link": "Inphinit/Experimental/Form.html#method_setup", "name": "Inphinit\\Experimental\\Form::setup", "doc": "&quot;Define default attributes for all elements&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Experimental\\Form", "fromLink": "Inphinit/Experimental/Form.html", "link": "Inphinit/Experimental/Form.html#method_comboRange", "name": "Inphinit\\Experimental\\Form::comboRange", "doc": "&quot;Generate combo by range&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Experimental\\Form", "fromLink": "Inphinit/Experimental/Form.html", "link": "Inphinit/Experimental/Form.html#method_combo", "name": "Inphinit\\Experimental\\Form::combo", "doc": "&quot;Create a select combo based in an array&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Experimental\\Form", "fromLink": "Inphinit/Experimental/Form.html", "link": "Inphinit/Experimental/Form.html#method_input", "name": "Inphinit\\Experimental\\Form::input", "doc": "&quot;Create a input or textarea&quot;"},
            
            {"type": "Class", "fromName": "Inphinit", "fromLink": "Inphinit.html", "link": "Inphinit/File.html", "name": "Inphinit\\File", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Inphinit\\File", "fromLink": "Inphinit/File.html", "link": "Inphinit/File.html#method_exists", "name": "Inphinit\\File::exists", "doc": "&quot;Check if file exists using case-sensitive,\nFor help developers who using Windows OS and using unix-like for production&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\File", "fromLink": "Inphinit/File.html", "link": "Inphinit/File.html#method_permission", "name": "Inphinit\\File::permission", "doc": "&quot;Get file\/folder permissions in a format more readable.&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\File", "fromLink": "Inphinit/File.html", "link": "Inphinit/File.html#method_mime", "name": "Inphinit\\File::mime", "doc": "&quot;Get mimetype from file, return &lt;code&gt;false&lt;\/code&gt; if file is invalid&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\File", "fromLink": "Inphinit/File.html", "link": "Inphinit/File.html#method_encoding", "name": "Inphinit\\File::encoding", "doc": "&quot;Determines whether the file is binary&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\File", "fromLink": "Inphinit/File.html", "link": "Inphinit/File.html#method_output", "name": "Inphinit\\File::output", "doc": "&quot;Show file in output, if use ob_start is auto used ob_flush. You can set delay in microseconds for cycles&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\File", "fromLink": "Inphinit/File.html", "link": "Inphinit/File.html#method_portion", "name": "Inphinit\\File::portion", "doc": "&quot;Read excerpt from a file&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\File", "fromLink": "Inphinit/File.html", "link": "Inphinit/File.html#method_lines", "name": "Inphinit\\File::lines", "doc": "&quot;Read lines from a file&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\File", "fromLink": "Inphinit/File.html", "link": "Inphinit/File.html#method_size", "name": "Inphinit\\File::size", "doc": "&quot;Get file size, support for read files with more of 2GB in 32bit.&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\File", "fromLink": "Inphinit/File.html", "link": "Inphinit/File.html#method_clearstat", "name": "Inphinit\\File::clearstat", "doc": "&quot;Clear state files and clear size files in &lt;code&gt;Inphinit\\File::size&lt;\/code&gt;&quot;"},
            
            {"type": "Class", "fromName": "Inphinit", "fromLink": "Inphinit.html", "link": "Inphinit/Helper.html", "name": "Inphinit\\Helper", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Inphinit\\Helper", "fromLink": "Inphinit/Helper.html", "link": "Inphinit/Helper.html#method_parseVersion", "name": "Inphinit\\Helper::parseVersion", "doc": "&quot;Parse version format&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Helper", "fromLink": "Inphinit/Helper.html", "link": "Inphinit/Helper.html#method_toAscii", "name": "Inphinit\\Helper::toAscii", "doc": "&quot;Convert string to ASCII&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Helper", "fromLink": "Inphinit/Helper.html", "link": "Inphinit/Helper.html#method_capitalize", "name": "Inphinit\\Helper::capitalize", "doc": "&quot;Capitalize words using hyphen or a custom delimiter.&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Helper", "fromLink": "Inphinit/Helper.html", "link": "Inphinit/Helper.html#method_extract", "name": "Inphinit\\Helper::extract", "doc": "&quot;Read array or object by path using dot&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Helper", "fromLink": "Inphinit/Helper.html", "link": "Inphinit/Helper.html#method_iterable", "name": "Inphinit\\Helper::iterable", "doc": "&quot;Equivalent to &lt;code&gt;is_iterable&lt;\/code&gt; from PHP-7.1.0+&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Helper", "fromLink": "Inphinit/Helper.html", "link": "Inphinit/Helper.html#method_seq", "name": "Inphinit\\Helper::seq", "doc": "&quot;Check if array is sequential, like [&#039;foo&#039;, &#039;bar&#039;]&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Helper", "fromLink": "Inphinit/Helper.html", "link": "Inphinit/Helper.html#method_assoc", "name": "Inphinit\\Helper::assoc", "doc": "&quot;Check if array is associative, like [ &#039;bar&#039; =&gt; foo&#039;, &#039;baz&#039; =&gt; &#039;bar&#039;]&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Helper", "fromLink": "Inphinit/Helper.html", "link": "Inphinit/Helper.html#method_ksort", "name": "Inphinit\\Helper::ksort", "doc": "&quot;Check if array is associative, like [ &#039;bar&#039; =&gt; foo&#039;, &#039;baz&#039; =&gt; &#039;bar&#039;]&quot;"},
            
            {"type": "Class", "fromName": "Inphinit\\Http", "fromLink": "Inphinit/Http.html", "link": "Inphinit/Http/Negotiation.html", "name": "Inphinit\\Http\\Negotiation", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Inphinit\\Http\\Negotiation", "fromLink": "Inphinit/Http/Negotiation.html", "link": "Inphinit/Http/Negotiation.html#method___construct", "name": "Inphinit\\Http\\Negotiation::__construct", "doc": "&quot;Create a Negotiation instance&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Http\\Negotiation", "fromLink": "Inphinit/Http/Negotiation.html", "link": "Inphinit/Http/Negotiation.html#method_fromString", "name": "Inphinit\\Http\\Negotiation::fromString", "doc": "&quot;Create a Negotiation instance based in string (eg.: `curl_opt(.&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Http\\Negotiation", "fromLink": "Inphinit/Http/Negotiation.html", "link": "Inphinit/Http/Negotiation.html#method_acceptLanguage", "name": "Inphinit\\Http\\Negotiation::acceptLanguage", "doc": "&quot;Get all languages by &lt;code&gt;Accept-Language&lt;\/code&gt; header sorted by q-factor (defined by &lt;code&gt;$level&lt;\/code&gt;)&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Http\\Negotiation", "fromLink": "Inphinit/Http/Negotiation.html", "link": "Inphinit/Http/Negotiation.html#method_acceptCharset", "name": "Inphinit\\Http\\Negotiation::acceptCharset", "doc": "&quot;Get all languages by &lt;code&gt;Accept-Charset&lt;\/code&gt; header and sort by q-factor (defined by &lt;code&gt;$level&lt;\/code&gt;)&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Http\\Negotiation", "fromLink": "Inphinit/Http/Negotiation.html", "link": "Inphinit/Http/Negotiation.html#method_acceptEncoding", "name": "Inphinit\\Http\\Negotiation::acceptEncoding", "doc": "&quot;Get all languages by &lt;code&gt;Accept-Encoding&lt;\/code&gt; header and sort by q-factor (defined by &lt;code&gt;$level&lt;\/code&gt;)&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Http\\Negotiation", "fromLink": "Inphinit/Http/Negotiation.html", "link": "Inphinit/Http/Negotiation.html#method_accept", "name": "Inphinit\\Http\\Negotiation::accept", "doc": "&quot;Get all document types by &lt;code&gt;Accept&lt;\/code&gt; header and sorted by q-factor (defined by &lt;code&gt;$level&lt;\/code&gt;)&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Http\\Negotiation", "fromLink": "Inphinit/Http/Negotiation.html", "link": "Inphinit/Http/Negotiation.html#method_getLanguage", "name": "Inphinit\\Http\\Negotiation::getLanguage", "doc": "&quot;Get the first language with with the greatest q-factor,\nif it does not exist then return the value of &lt;code&gt;$alternative&lt;\/code&gt;&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Http\\Negotiation", "fromLink": "Inphinit/Http/Negotiation.html", "link": "Inphinit/Http/Negotiation.html#method_getCharset", "name": "Inphinit\\Http\\Negotiation::getCharset", "doc": "&quot;Get the first charset with with the greatest q-factor,\nif it does not exist then return the value of &lt;code&gt;$alternative&lt;\/code&gt;&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Http\\Negotiation", "fromLink": "Inphinit/Http/Negotiation.html", "link": "Inphinit/Http/Negotiation.html#method_getEncoding", "name": "Inphinit\\Http\\Negotiation::getEncoding", "doc": "&quot;Get the first encoding with with the greatest q-factor,\nif it does not exist then return the value of &lt;code&gt;$alternative&lt;\/code&gt;&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Http\\Negotiation", "fromLink": "Inphinit/Http/Negotiation.html", "link": "Inphinit/Http/Negotiation.html#method_getAccept", "name": "Inphinit\\Http\\Negotiation::getAccept", "doc": "&quot;Get the first \&quot;document type\&quot; with the greatest q-factor,\nif it does not exist then return the value of &lt;code&gt;$alternative&lt;\/code&gt;&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Http\\Negotiation", "fromLink": "Inphinit/Http/Negotiation.html", "link": "Inphinit/Http/Negotiation.html#method_header", "name": "Inphinit\\Http\\Negotiation::header", "doc": "&quot;Parse any header like &lt;code&gt;TE&lt;\/code&gt; header or headers with &lt;code&gt;Accepet-&lt;\/code&gt; prefix&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Http\\Negotiation", "fromLink": "Inphinit/Http/Negotiation.html", "link": "Inphinit/Http/Negotiation.html#method_qFactor", "name": "Inphinit\\Http\\Negotiation::qFactor", "doc": "&quot;Parse and sort a custom value with q-factor&quot;"},
            
            {"type": "Class", "fromName": "Inphinit\\Http", "fromLink": "Inphinit/Http.html", "link": "Inphinit/Http/Redirect.html", "name": "Inphinit\\Http\\Redirect", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Inphinit\\Http\\Redirect", "fromLink": "Inphinit/Http/Redirect.html", "link": "Inphinit/Http/Redirect.html#method_only", "name": "Inphinit\\Http\\Redirect::only", "doc": "&quot;Redirect and stop application execution&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Http\\Redirect", "fromLink": "Inphinit/Http/Redirect.html", "link": "Inphinit/Http/Redirect.html#method_to", "name": "Inphinit\\Http\\Redirect::to", "doc": "&quot;Redirects to a valid path within the application&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Http\\Redirect", "fromLink": "Inphinit/Http/Redirect.html", "link": "Inphinit/Http/Redirect.html#method_back", "name": "Inphinit\\Http\\Redirect::back", "doc": "&quot;Return to redirect to new path&quot;"},
            
            {"type": "Class", "fromName": "Inphinit\\Http", "fromLink": "Inphinit/Http.html", "link": "Inphinit/Http/Request.html", "name": "Inphinit\\Http\\Request", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Inphinit\\Http\\Request", "fromLink": "Inphinit/Http/Request.html", "link": "Inphinit/Http/Request.html#method_path", "name": "Inphinit\\Http\\Request::path", "doc": "&quot;Get current HTTP path or route path&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Http\\Request", "fromLink": "Inphinit/Http/Request.html", "link": "Inphinit/Http/Request.html#method_is", "name": "Inphinit\\Http\\Request::is", "doc": "&quot;Check if is a specific HTTP method, HTTPS, and xmlhttprequest (Depends on how an ajax call was made)&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Http\\Request", "fromLink": "Inphinit/Http/Request.html", "link": "Inphinit/Http/Request.html#method_header", "name": "Inphinit\\Http\\Request::header", "doc": "&quot;Get HTTP headers from current request&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Http\\Request", "fromLink": "Inphinit/Http/Request.html", "link": "Inphinit/Http/Request.html#method_query", "name": "Inphinit\\Http\\Request::query", "doc": "&quot;Get querystring, this method is useful for anyone who uses IIS.&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Http\\Request", "fromLink": "Inphinit/Http/Request.html", "link": "Inphinit/Http/Request.html#method_get", "name": "Inphinit\\Http\\Request::get", "doc": "&quot;Get a value from &lt;code&gt;$_GET&lt;\/code&gt;, if &lt;code&gt;$_GET&lt;\/code&gt; is a array multidimensional, you can use dot like path:\nIf &lt;code&gt;$_GET[&#039;foo&#039;]&lt;\/code&gt; returns this &lt;code&gt;array( &#039;baz&#039; =&amp;gt; &#039;bar&#039; =&amp;gt; 1);&lt;\/code&gt; use &lt;code&gt;Request::get(&#039;foo.bar.baz&#039;);&lt;\/code&gt;\nfor return &lt;code&gt;1&lt;\/code&gt;&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Http\\Request", "fromLink": "Inphinit/Http/Request.html", "link": "Inphinit/Http/Request.html#method_post", "name": "Inphinit\\Http\\Request::post", "doc": "&quot;Get a value from $_POST, if $_POST is a array multidimensional, you can use dot like path:\nIf $_POST[&#039;foo&#039;] returns this array( &#039;baz&#039; =&gt; &#039;bar&#039; =&gt; 1); use Request::post(&#039;foo.bar.baz&#039;);&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Http\\Request", "fromLink": "Inphinit/Http/Request.html", "link": "Inphinit/Http/Request.html#method_cookie", "name": "Inphinit\\Http\\Request::cookie", "doc": "&quot;Get a value from &lt;code&gt;$_COOKIE&lt;\/code&gt; (support path using dots)&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Http\\Request", "fromLink": "Inphinit/Http/Request.html", "link": "Inphinit/Http/Request.html#method_file", "name": "Inphinit\\Http\\Request::file", "doc": "&quot;Get a value from &lt;code&gt;$_FILES&lt;\/code&gt; (support path using dots)&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Http\\Request", "fromLink": "Inphinit/Http/Request.html", "link": "Inphinit/Http/Request.html#method_raw", "name": "Inphinit\\Http\\Request::raw", "doc": "&quot;Get a value input handler&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Http\\Request", "fromLink": "Inphinit/Http/Request.html", "link": "Inphinit/Http/Request.html#method_json", "name": "Inphinit\\Http\\Request::json", "doc": "&quot;Get a value input handler&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Http\\Request", "fromLink": "Inphinit/Http/Request.html", "link": "Inphinit/Http/Request.html#method_xml", "name": "Inphinit\\Http\\Request::xml", "doc": "&quot;Create a Document instance from HTTP request&quot;"},
            
            {"type": "Class", "fromName": "Inphinit\\Http", "fromLink": "Inphinit/Http.html", "link": "Inphinit/Http/Response.html", "name": "Inphinit\\Http\\Response", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Inphinit\\Http\\Response", "fromLink": "Inphinit/Http/Response.html", "link": "Inphinit/Http/Response.html#method_dispatch", "name": "Inphinit\\Http\\Response::dispatch", "doc": "&quot;Define registered headers to response&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Http\\Response", "fromLink": "Inphinit/Http/Response.html", "link": "Inphinit/Http/Response.html#method_getHeaders", "name": "Inphinit\\Http\\Response::getHeaders", "doc": "&quot;Get registered headers&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Http\\Response", "fromLink": "Inphinit/Http/Response.html", "link": "Inphinit/Http/Response.html#method_status", "name": "Inphinit\\Http\\Response::status", "doc": "&quot;Get or set status code and return last status code&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Http\\Response", "fromLink": "Inphinit/Http/Response.html", "link": "Inphinit/Http/Response.html#method_putHeader", "name": "Inphinit\\Http\\Response::putHeader", "doc": "&quot;Register a header and return your index, if &lt;code&gt;Response::dispatch&lt;\/code&gt;\nwas previously executed the header will be set directly and will not be\nregistered&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Http\\Response", "fromLink": "Inphinit/Http/Response.html", "link": "Inphinit/Http/Response.html#method_removeHeader", "name": "Inphinit\\Http\\Response::removeHeader", "doc": "&quot;Remove registered (or setted) header&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Http\\Response", "fromLink": "Inphinit/Http/Response.html", "link": "Inphinit/Http/Response.html#method_cache", "name": "Inphinit\\Http\\Response::cache", "doc": "&quot;Set header to cache page (or no-cache)&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Http\\Response", "fromLink": "Inphinit/Http/Response.html", "link": "Inphinit/Http/Response.html#method_download", "name": "Inphinit\\Http\\Response::download", "doc": "&quot;Force download current page&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Http\\Response", "fromLink": "Inphinit/Http/Response.html", "link": "Inphinit/Http/Response.html#method_type", "name": "Inphinit\\Http\\Response::type", "doc": "&quot;Set content-type&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Http\\Response", "fromLink": "Inphinit/Http/Response.html", "link": "Inphinit/Http/Response.html#method_charset", "name": "Inphinit\\Http\\Response::charset", "doc": "&quot;Set charset in content-type&quot;"},
            
            {"type": "Class", "fromName": "Inphinit\\Http", "fromLink": "Inphinit/Http.html", "link": "Inphinit/Http/Status.html", "name": "Inphinit\\Http\\Status", "doc": "&quot;Constant with the most common HTTP codes&quot;"},
                                                        {"type": "Method", "fromName": "Inphinit\\Http\\Status", "fromLink": "Inphinit/Http/Status.html", "link": "Inphinit/Http/Status.html#method_message", "name": "Inphinit\\Http\\Status::message", "doc": "&quot;Get message by HTTP code&quot;"},
            
            {"type": "Class", "fromName": "Inphinit", "fromLink": "Inphinit.html", "link": "Inphinit/Maintenance.html", "name": "Inphinit\\Maintenance", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Inphinit\\Maintenance", "fromLink": "Inphinit/Maintenance.html", "link": "Inphinit/Maintenance.html#method_down", "name": "Inphinit\\Maintenance::down", "doc": "&quot;Down site to maintenance mode&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Maintenance", "fromLink": "Inphinit/Maintenance.html", "link": "Inphinit/Maintenance.html#method_up", "name": "Inphinit\\Maintenance::up", "doc": "&quot;Up site&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Maintenance", "fromLink": "Inphinit/Maintenance.html", "link": "Inphinit/Maintenance.html#method_enable", "name": "Inphinit\\Maintenance::enable", "doc": "&quot;Enable\/disable maintenance mode&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Maintenance", "fromLink": "Inphinit/Maintenance.html", "link": "Inphinit/Maintenance.html#method_ignoreif", "name": "Inphinit\\Maintenance::ignoreif", "doc": "&quot;Up the site only in certain conditions, eg. the site administrator of the IP.&quot;"},
            
            {"type": "Class", "fromName": "Inphinit", "fromLink": "Inphinit.html", "link": "Inphinit/Packages.html", "name": "Inphinit\\Packages", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Inphinit\\Packages", "fromLink": "Inphinit/Packages.html", "link": "Inphinit/Packages.html#method___construct", "name": "Inphinit\\Packages::__construct", "doc": "&quot;Create a &lt;code&gt;Inphinit\\Packages&lt;\/code&gt; instance.&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Packages", "fromLink": "Inphinit/Packages.html", "link": "Inphinit/Packages.html#method_logs", "name": "Inphinit\\Packages::logs", "doc": "&quot;Get log&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Packages", "fromLink": "Inphinit/Packages.html", "link": "Inphinit/Packages.html#method_auto", "name": "Inphinit\\Packages::auto", "doc": "&quot;Auto import composer packages&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Packages", "fromLink": "Inphinit/Packages.html", "link": "Inphinit/Packages.html#method_inAutoload", "name": "Inphinit\\Packages::inAutoload", "doc": "&quot;Load &lt;code&gt;.\/system\/boot\/namespaces.php&lt;\/code&gt; classes&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Packages", "fromLink": "Inphinit/Packages.html", "link": "Inphinit/Packages.html#method_classmap", "name": "Inphinit\\Packages::classmap", "doc": "&quot;Load &lt;code&gt;autoload_classmap.php&lt;\/code&gt; classes&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Packages", "fromLink": "Inphinit/Packages.html", "link": "Inphinit/Packages.html#method_psr0", "name": "Inphinit\\Packages::psr0", "doc": "&quot;Load &lt;code&gt;autoload_namespaces.php&lt;\/code&gt; classes, used by PSR-0 packages&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Packages", "fromLink": "Inphinit/Packages.html", "link": "Inphinit/Packages.html#method_psr4", "name": "Inphinit\\Packages::psr4", "doc": "&quot;Load &lt;code&gt;autoload_psr4.php&lt;\/code&gt; classes, used by PSR-4 packages&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Packages", "fromLink": "Inphinit/Packages.html", "link": "Inphinit/Packages.html#method_save", "name": "Inphinit\\Packages::save", "doc": "&quot;Save imported packages path to file in PHP format&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Packages", "fromLink": "Inphinit/Packages.html", "link": "Inphinit/Packages.html#method_get", "name": "Inphinit\\Packages::get", "doc": "&quot;Get libs&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Packages", "fromLink": "Inphinit/Packages.html", "link": "Inphinit/Packages.html#method_version", "name": "Inphinit\\Packages::version", "doc": "&quot;Get package version from composer.lock file&quot;"},
            
            {"type": "Class", "fromName": "Inphinit", "fromLink": "Inphinit.html", "link": "Inphinit/Regex.html", "name": "Inphinit\\Regex", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Inphinit\\Regex", "fromLink": "Inphinit/Regex.html", "link": "Inphinit/Regex.html#method_parse", "name": "Inphinit\\Regex::parse", "doc": "&quot;Parse string like.: &lt;code&gt;{:[a-z]+:}.domain.com&lt;\/code&gt; or &lt;code&gt;\/user\/{:[a-z]+:}\/{:\\d+:}&lt;\/code&gt; to regex&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Regex", "fromLink": "Inphinit/Regex.html", "link": "Inphinit/Regex.html#method_args", "name": "Inphinit\\Regex::args", "doc": "&quot;Convert one argument like &lt;code&gt;{:[a-z]+:}&lt;\/code&gt; to &lt;code&gt;([a-z]+)&lt;\/code&gt;,\nthis function is used by &lt;code&gt;Router::parse&lt;\/code&gt;&quot;"},
            
            {"type": "Class", "fromName": "Inphinit\\Routing", "fromLink": "Inphinit/Routing.html", "link": "Inphinit/Routing/Group.html", "name": "Inphinit\\Routing\\Group", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Inphinit\\Routing\\Group", "fromLink": "Inphinit/Routing/Group.html", "link": "Inphinit/Routing/Group.html#method_create", "name": "Inphinit\\Routing\\Group::create", "doc": "&quot;Create a new route group&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Routing\\Group", "fromLink": "Inphinit/Routing/Group.html", "link": "Inphinit/Routing/Group.html#method_prefixNS", "name": "Inphinit\\Routing\\Group::prefixNS", "doc": "&quot;Define namespace prefix for group&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Routing\\Group", "fromLink": "Inphinit/Routing/Group.html", "link": "Inphinit/Routing/Group.html#method_domain", "name": "Inphinit\\Routing\\Group::domain", "doc": "&quot;Define domain for group&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Routing\\Group", "fromLink": "Inphinit/Routing/Group.html", "link": "Inphinit/Routing/Group.html#method_path", "name": "Inphinit\\Routing\\Group::path", "doc": "&quot;Define path for group&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Routing\\Group", "fromLink": "Inphinit/Routing/Group.html", "link": "Inphinit/Routing/Group.html#method_secure", "name": "Inphinit\\Routing\\Group::secure", "doc": "&quot;Access only with HTTPS, or only HTTP, or both&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Routing\\Group", "fromLink": "Inphinit/Routing/Group.html", "link": "Inphinit/Routing/Group.html#method_then", "name": "Inphinit\\Routing\\Group::then", "doc": "&quot;Define callback for group, this callback is executed if the request meets the group\nsettings&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Routing\\Group", "fromLink": "Inphinit/Routing/Group.html", "link": "Inphinit/Routing/Group.html#method_checkSecurity", "name": "Inphinit\\Routing\\Group::checkSecurity", "doc": "&quot;Method is used for check if HTTPS or HTTP or both&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Routing\\Group", "fromLink": "Inphinit/Routing/Group.html", "link": "Inphinit/Routing/Group.html#method_checkDomain", "name": "Inphinit\\Routing\\Group::checkDomain", "doc": "&quot;Method is used for check domain and return arguments if using regex&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Routing\\Group", "fromLink": "Inphinit/Routing/Group.html", "link": "Inphinit/Routing/Group.html#method_checkPath", "name": "Inphinit\\Routing\\Group::checkPath", "doc": "&quot;Method is used for check path&quot;"},
            
            {"type": "Class", "fromName": "Inphinit\\Routing", "fromLink": "Inphinit/Routing.html", "link": "Inphinit/Routing/Quick.html", "name": "Inphinit\\Routing\\Quick", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Inphinit\\Routing\\Quick", "fromLink": "Inphinit/Routing/Quick.html", "link": "Inphinit/Routing/Quick.html#method_create", "name": "Inphinit\\Routing\\Quick::create", "doc": "&quot;Create routes based in a \\Controller&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Routing\\Quick", "fromLink": "Inphinit/Routing/Quick.html", "link": "Inphinit/Routing/Quick.html#method___construct", "name": "Inphinit\\Routing\\Quick::__construct", "doc": "&quot;Create routes based in a \\Controller&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Routing\\Quick", "fromLink": "Inphinit/Routing/Quick.html", "link": "Inphinit/Routing/Quick.html#method_canonical", "name": "Inphinit\\Routing\\Quick::canonical", "doc": "&quot;Define route format, &lt;code&gt;Quick::BOTH&lt;\/code&gt; for create routes like &lt;code&gt;\/foo\/&lt;\/code&gt; and &lt;code&gt;\/foo&lt;\/code&gt;, &lt;code&gt;Quick::SLASH&lt;\/code&gt;\nfor create routes like &lt;code&gt;\/foo\/&lt;\/code&gt; and &lt;code&gt;Quick::NOSLASH&lt;\/code&gt; for create routes like &lt;code&gt;\/foo&lt;\/code&gt;&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Routing\\Quick", "fromLink": "Inphinit/Routing/Quick.html", "link": "Inphinit/Routing/Quick.html#method_path", "name": "Inphinit\\Routing\\Quick::path", "doc": "&quot;Define prefix path for all routes in class&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Routing\\Quick", "fromLink": "Inphinit/Routing/Quick.html", "link": "Inphinit/Routing/Quick.html#method_prepare", "name": "Inphinit\\Routing\\Quick::prepare", "doc": "&quot;Create routes by configurations&quot;"},
            
            {"type": "Class", "fromName": "Inphinit\\Routing", "fromLink": "Inphinit/Routing.html", "link": "Inphinit/Routing/Redirector.html", "name": "Inphinit\\Routing\\Redirector", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Inphinit\\Routing\\Redirector", "fromLink": "Inphinit/Routing/Redirector.html", "link": "Inphinit/Routing/Redirector.html#method_route", "name": "Inphinit\\Routing\\Redirector::route", "doc": "&quot;Redirect to route based&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Routing\\Redirector", "fromLink": "Inphinit/Routing/Redirector.html", "link": "Inphinit/Routing/Redirector.html#method_action", "name": "Inphinit\\Routing\\Redirector::action", "doc": "&quot;Redirect to route based&quot;"},
            
            {"type": "Class", "fromName": "Inphinit\\Routing", "fromLink": "Inphinit/Routing.html", "link": "Inphinit/Routing/Rest.html", "name": "Inphinit\\Routing\\Rest", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Inphinit\\Routing\\Rest", "fromLink": "Inphinit/Routing/Rest.html", "link": "Inphinit/Routing/Rest.html#method_create", "name": "Inphinit\\Routing\\Rest::create", "doc": "&quot;Create REST routes based in a \\Controller&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Routing\\Rest", "fromLink": "Inphinit/Routing/Rest.html", "link": "Inphinit/Routing/Rest.html#method___construct", "name": "Inphinit\\Routing\\Rest::__construct", "doc": "&quot;Create REST routes based in a \\Controller&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Routing\\Rest", "fromLink": "Inphinit/Routing/Rest.html", "link": "Inphinit/Routing/Rest.html#method_type", "name": "Inphinit\\Routing\\Rest::type", "doc": "&quot;Define the Content-Type header&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Routing\\Rest", "fromLink": "Inphinit/Routing/Rest.html", "link": "Inphinit/Routing/Rest.html#method_charset", "name": "Inphinit\\Routing\\Rest::charset", "doc": "&quot;Define the Content-Type charset&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Routing\\Rest", "fromLink": "Inphinit/Routing/Rest.html", "link": "Inphinit/Routing/Rest.html#method_path", "name": "Inphinit\\Routing\\Rest::path", "doc": "&quot;Define prefix path for all routes in class&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Routing\\Rest", "fromLink": "Inphinit/Routing/Rest.html", "link": "Inphinit/Routing/Rest.html#method_prepare", "name": "Inphinit\\Routing\\Rest::prepare", "doc": "&quot;Define routes&quot;"},
            
            {"type": "Class", "fromName": "Inphinit\\Routing", "fromLink": "Inphinit/Routing.html", "link": "Inphinit/Routing/Route.html", "name": "Inphinit\\Routing\\Route", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Inphinit\\Routing\\Route", "fromLink": "Inphinit/Routing/Route.html", "link": "Inphinit/Routing/Route.html#method_set", "name": "Inphinit\\Routing\\Route::set", "doc": "&quot;Register or remove a action from controller for a route&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Routing\\Route", "fromLink": "Inphinit/Routing/Route.html", "link": "Inphinit/Routing/Route.html#method_get", "name": "Inphinit\\Routing\\Route::get", "doc": "&quot;Get action controller from current route&quot;"},
            
            {"type": "Class", "fromName": "Inphinit\\Routing", "fromLink": "Inphinit/Routing.html", "link": "Inphinit/Routing/Router.html", "name": "Inphinit\\Routing\\Router", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Inphinit\\Routing\\Router", "fromLink": "Inphinit/Routing/Router.html", "link": "Inphinit/Routing/Router.html#method_find", "name": "Inphinit\\Routing\\Router::find", "doc": "&quot;Get params from routes using regex&quot;"},
            
            {"type": "Class", "fromName": "Inphinit", "fromLink": "Inphinit.html", "link": "Inphinit/Session.html", "name": "Inphinit\\Session", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Inphinit\\Session", "fromLink": "Inphinit/Session.html", "link": "Inphinit/Session.html#method___construct", "name": "Inphinit\\Session::__construct", "doc": "&quot;Create cookie session and configure session&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Session", "fromLink": "Inphinit/Session.html", "link": "Inphinit/Session.html#method_commit", "name": "Inphinit\\Session::commit", "doc": "&quot;Lock session file and save variables&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Session", "fromLink": "Inphinit/Session.html", "link": "Inphinit/Session.html#method_regenerate", "name": "Inphinit\\Session::regenerate", "doc": "&quot;Regenerate ID&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Session", "fromLink": "Inphinit/Session.html", "link": "Inphinit/Session.html#method_get", "name": "Inphinit\\Session::get", "doc": "&quot;Get all values like array or get specific item by level (multidimensional) using path&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Session", "fromLink": "Inphinit/Session.html", "link": "Inphinit/Session.html#method___clone", "name": "Inphinit\\Session::__clone", "doc": "&quot;Prevent clone session object&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Session", "fromLink": "Inphinit/Session.html", "link": "Inphinit/Session.html#method___get", "name": "Inphinit\\Session::__get", "doc": "&quot;Magic method for get session variables (this method also returns variables that have not yet\nbeen committed)&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Session", "fromLink": "Inphinit/Session.html", "link": "Inphinit/Session.html#method___set", "name": "Inphinit\\Session::__set", "doc": "&quot;Magic method for set session variables (this method don&#039;t commit data)&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Session", "fromLink": "Inphinit/Session.html", "link": "Inphinit/Session.html#method___isset", "name": "Inphinit\\Session::__isset", "doc": "&quot;Magic method for check if variable is setted (this method also returns variables that have not yet\nbeen committed)&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Session", "fromLink": "Inphinit/Session.html", "link": "Inphinit/Session.html#method___unset", "name": "Inphinit\\Session::__unset", "doc": "&quot;Magic method for unset variable with &lt;code&gt;unset()&lt;\/code&gt; function&quot;"},
            
            {"type": "Class", "fromName": "Inphinit", "fromLink": "Inphinit.html", "link": "Inphinit/Shell.html", "name": "Inphinit\\Shell", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Inphinit\\Shell", "fromLink": "Inphinit/Shell.html", "link": "Inphinit/Shell.html#method___construct", "name": "Inphinit\\Shell::__construct", "doc": "&quot;Create a Shell instance for use CLI interface&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Shell", "fromLink": "Inphinit/Shell.html", "link": "Inphinit/Shell.html#method_arguments", "name": "Inphinit\\Shell::arguments", "doc": "&quot;Get arguments&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Shell", "fromLink": "Inphinit/Shell.html", "link": "Inphinit/Shell.html#method_hasArgs", "name": "Inphinit\\Shell::hasArgs", "doc": "&quot;Check if using arguments&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Shell", "fromLink": "Inphinit/Shell.html", "link": "Inphinit/Shell.html#method_isCli", "name": "Inphinit\\Shell::isCli", "doc": "&quot;Check if script is executed in CLI&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Shell", "fromLink": "Inphinit/Shell.html", "link": "Inphinit/Shell.html#method_input", "name": "Inphinit\\Shell::input", "doc": "&quot;Get input data&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Shell", "fromLink": "Inphinit/Shell.html", "link": "Inphinit/Shell.html#method_observer", "name": "Inphinit\\Shell::observer", "doc": "&quot;Add callback event to input&quot;"},
            
            {"type": "Class", "fromName": "Inphinit", "fromLink": "Inphinit.html", "link": "Inphinit/Storage.html", "name": "Inphinit\\Storage", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Inphinit\\Storage", "fromLink": "Inphinit/Storage.html", "link": "Inphinit/Storage.html#method_path", "name": "Inphinit\\Storage::path", "doc": "&quot;Get absolute path from storage location&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Storage", "fromLink": "Inphinit/Storage.html", "link": "Inphinit/Storage.html#method_resolve", "name": "Inphinit\\Storage::resolve", "doc": "&quot;Convert path to storage path&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Storage", "fromLink": "Inphinit/Storage.html", "link": "Inphinit/Storage.html#method_autoclean", "name": "Inphinit\\Storage::autoclean", "doc": "&quot;Clear old files in a folder from storage path&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Storage", "fromLink": "Inphinit/Storage.html", "link": "Inphinit/Storage.html#method_temp", "name": "Inphinit\\Storage::temp", "doc": "&quot;Create a tmp in storage\/tmp folder&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Storage", "fromLink": "Inphinit/Storage.html", "link": "Inphinit/Storage.html#method_write", "name": "Inphinit\\Storage::write", "doc": "&quot;Create a file in a folder or overwrite existing file&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Storage", "fromLink": "Inphinit/Storage.html", "link": "Inphinit/Storage.html#method_put", "name": "Inphinit\\Storage::put", "doc": "&quot;Create a file in a folder in storage or append data to existing file&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Storage", "fromLink": "Inphinit/Storage.html", "link": "Inphinit/Storage.html#method_remove", "name": "Inphinit\\Storage::remove", "doc": "&quot;Delete a file in storage&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Storage", "fromLink": "Inphinit/Storage.html", "link": "Inphinit/Storage.html#method_createFolder", "name": "Inphinit\\Storage::createFolder", "doc": "&quot;Create a folder in storage using 0700 permission (if unix-like)&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Storage", "fromLink": "Inphinit/Storage.html", "link": "Inphinit/Storage.html#method_removeFolder", "name": "Inphinit\\Storage::removeFolder", "doc": "&quot;Remove recursive folders in storage folder&quot;"},
            
            {"type": "Class", "fromName": "Inphinit", "fromLink": "Inphinit.html", "link": "Inphinit/Uri.html", "name": "Inphinit\\Uri", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Inphinit\\Uri", "fromLink": "Inphinit/Uri.html", "link": "Inphinit/Uri.html#method_encodepath", "name": "Inphinit\\Uri::encodepath", "doc": "&quot;Convert text to URL format&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Uri", "fromLink": "Inphinit/Uri.html", "link": "Inphinit/Uri.html#method_canonpath", "name": "Inphinit\\Uri::canonpath", "doc": "&quot;Canonicalize paths&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Uri", "fromLink": "Inphinit/Uri.html", "link": "Inphinit/Uri.html#method_normalize", "name": "Inphinit\\Uri::normalize", "doc": "&quot;Normalize URL, include canonicalized path&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Uri", "fromLink": "Inphinit/Uri.html", "link": "Inphinit/Uri.html#method_root", "name": "Inphinit\\Uri::root", "doc": "&quot;Create URL based in public root application, for example,\nif you install inphinit in a sub path like: &lt;code&gt;http:\/\/site\/foo\/bar\/myapplication\/&lt;\/code&gt;&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Uri", "fromLink": "Inphinit/Uri.html", "link": "Inphinit/Uri.html#method_canonquery", "name": "Inphinit\\Uri::canonquery", "doc": "&quot;Reorder querystring by \&quot;keys\&quot;\nif: &lt;code&gt;Uri::canonquery(&#039;z=1&amp;amp;u=2&amp;amp;a=5&#039;)&lt;\/code&gt; returns &lt;code&gt;a=5&amp;amp;u=2&amp;amp;z=1&lt;\/code&gt;&quot;"},
            
            {"type": "Class", "fromName": "Inphinit\\Viewing", "fromLink": "Inphinit/Viewing.html", "link": "Inphinit/Viewing/View.html", "name": "Inphinit\\Viewing\\View", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Inphinit\\Viewing\\View", "fromLink": "Inphinit/Viewing/View.html", "link": "Inphinit/Viewing/View.html#method_forceRender", "name": "Inphinit\\Viewing\\View::forceRender", "doc": "&quot;Force the &lt;code&gt;View::render&lt;\/code&gt; method to render at the time it is called&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Viewing\\View", "fromLink": "Inphinit/Viewing/View.html", "link": "Inphinit/Viewing/View.html#method_dispatch", "name": "Inphinit\\Viewing\\View::dispatch", "doc": "&quot;Starts rendering of registered views. After calling this method call it will automatically\nexecute &lt;code&gt;View::forceRender()&lt;\/code&gt;&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Viewing\\View", "fromLink": "Inphinit/Viewing/View.html", "link": "Inphinit/Viewing/View.html#method_data", "name": "Inphinit\\Viewing\\View::data", "doc": "&quot;Share or remove shared data to Views, shared variables will be added as variables to the views that will be executed later&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Viewing\\View", "fromLink": "Inphinit/Viewing/View.html", "link": "Inphinit/Viewing/View.html#method_exists", "name": "Inphinit\\Viewing\\View::exists", "doc": "&quot;Check if view exists in .\/application\/View\/ folder&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Viewing\\View", "fromLink": "Inphinit/Viewing/View.html", "link": "Inphinit/Viewing/View.html#method_render", "name": "Inphinit\\Viewing\\View::render", "doc": "&quot;Register or render a View. If View is registered this method returns the index number from View&quot;"},
                    {"type": "Method", "fromName": "Inphinit\\Viewing\\View", "fromLink": "Inphinit/Viewing/View.html", "link": "Inphinit/Viewing/View.html#method_remove", "name": "Inphinit\\Viewing\\View::remove", "doc": "&quot;Remove a registered View by index&quot;"},
            
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


