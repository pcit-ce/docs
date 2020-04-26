(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{330:function(t,e,a){"use strict";a.r(e);var l=a(33),i=Object(l.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"builds"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#builds"}},[t._v("#")]),t._v(" Builds")]),t._v(" "),a("h2",{attrs:{id:"list"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#list"}},[t._v("#")]),t._v(" List")]),t._v(" "),a("p",[t._v("This returns a list of builds for the current user. The result is paginated. The default limit is 100.")]),t._v(" "),a("blockquote",[a("p",[t._v("当前用户名下所有仓库的构建列表")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Method")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("URL")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("GET")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("/builds")])])])])]),t._v(" "),a("h2",{attrs:{id:"find-by-repo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#find-by-repo"}},[t._v("#")]),t._v(" Find By Repo")]),t._v(" "),a("p",[t._v("This returns a list of builds for an individual repository. The result is paginated. Each request will return 25 results.")]),t._v(" "),a("blockquote",[a("p",[t._v("某仓库的构建列表")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Method")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("URL")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("GET")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("/repo/{git_type}/{username}/{repo.name}/builds")])])])])]),t._v(" "),a("p",[a("strong",[t._v("Example:")]),t._v(" "),a("code",[t._v("GET")]),t._v(" "),a("code",[t._v("/repo/github/pcit-ce/pcit/builds")])]),t._v(" "),a("h2",{attrs:{id:"find-by-repo-current"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#find-by-repo-current"}},[t._v("#")]),t._v(" Find By Repo Current")]),t._v(" "),a("blockquote",[a("p",[t._v("某仓库最近完成的一次构建")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Method")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("URL")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("GET")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("/repo/{git_type}/{username}/{repo.name}/build/current")])])])])]),t._v(" "),a("p",[a("strong",[t._v("Example:")]),t._v(" "),a("code",[t._v("GET")]),t._v(" "),a("code",[t._v("/repo/github/pcit-ce/pcit/build/current")])]),t._v(" "),a("h2",{attrs:{id:"find"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#find"}},[t._v("#")]),t._v(" Find")]),t._v(" "),a("p",[t._v("This returns a single build.")]),t._v(" "),a("blockquote",[a("p",[t._v("返回某个构建的详情")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Method")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("URL")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("GET")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("/build/{build.id}")])])])])]),t._v(" "),a("p",[a("strong",[t._v("Example:")]),t._v(" "),a("code",[t._v("GET")]),t._v(" "),a("code",[t._v("/build/666")])]),t._v(" "),a("h2",{attrs:{id:"cancel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cancel"}},[t._v("#")]),t._v(" Cancel")]),t._v(" "),a("p",[t._v('This cancels a currently running build. It will set the build and associated jobs to "state": '),a("code",[t._v("canceled")]),t._v(".")]),t._v(" "),a("blockquote",[a("p",[t._v("取消某个构建")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Method")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("URL")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("POST")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("/build/{build.id}/cancel")])])])])]),t._v(" "),a("p",[a("strong",[t._v("Example:")]),t._v(" "),a("code",[t._v("POST")]),t._v(" "),a("code",[t._v("/build/666/cancel")])]),t._v(" "),a("h2",{attrs:{id:"restart"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#restart"}},[t._v("#")]),t._v(" Restart")]),t._v(" "),a("p",[t._v("This restarts a build that has completed or been canceled.")]),t._v(" "),a("blockquote",[a("p",[t._v("重新开始某个构建")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Method")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("URL")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("POST")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("/build/{build.id}/restart")])])])])]),t._v(" "),a("p",[a("strong",[t._v("Example:")]),t._v(" "),a("code",[t._v("POST")]),t._v(" "),a("code",[t._v("/build/666/restart")])]),t._v(" "),a("p",[a("strong",[t._v("Response")])])])}),[],!1,null,null,null);e.default=i.exports}}]);