(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{382:function(t,s,a){"use strict";a.r(s);var e=a(33),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"services"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#services"}},[t._v("#")]),t._v(" services")]),t._v(" "),a("p",[t._v("有时我们的构建需要额外的服务，例如数据库、缓存等服务。我们可以通过 "),a("code",[t._v("services")]),t._v(" 指令进行设置。")]),t._v(" "),a("blockquote",[a("p",[t._v("服务指令可以同时包含多个服务。")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mysql")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("redis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mongodb")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("    \n")])])]),a("p",[t._v("你也可以对 "),a("strong",[t._v("服务")]),t._v(" 进行详细的设置，例如指定镜像名、命令等。")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mysql")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mysql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("MYSQL_VERSION"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("env")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" MYSQL_DATABASE=test\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" MYSQL_ROOT_PASSWORD=test\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# entrypoint: [ "mysqld" ]')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# command: [ "--character-set-server=utf8mb4", "--default-authentication-plugin=mysql_native_password" ]')]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("redis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n")])])]),a("p",[t._v("我们的构建项目如何连接服务呢？下面以 PHP 的 PDO 驱动连接 "),a("code",[t._v("MySQL")]),t._v(" 为例。")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$pdo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PDO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'mysql:host=mysql;dbname=test;port=3306'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'root'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'test'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("这里 host 对应着每个服务的名字。")]),t._v(" "),a("h2",{attrs:{id:"默认配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#默认配置"}},[t._v("#")]),t._v(" 默认配置")]),t._v(" "),a("h3",{attrs:{id:"redis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis"}},[t._v("#")]),t._v(" Redis")]),t._v(" "),a("p",[t._v("版本 "),a("code",[t._v("5.0.3")]),t._v("\n密码 "),a("code",[t._v("无")])]),t._v(" "),a("h3",{attrs:{id:"mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[t._v("#")]),t._v(" MySQL")]),t._v(" "),a("p",[t._v("版本 "),a("code",[t._v("5.7.24")]),t._v("\n密码 "),a("code",[t._v("test")])])])}),[],!1,null,null,null);s.default=n.exports}}]);