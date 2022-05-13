(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{560:function(s,a,t){"use strict";t.r(a);var e=t(5),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h3",{attrs:{id:"_1-生成公钥和私钥"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-生成公钥和私钥"}},[s._v("#")]),s._v(" 1.生成公钥和私钥")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ssh-keygen -t rsa -C "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'8888888@qq.com'")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#换成自己邮箱,可以随便填,相当于一个标识")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#密码不用填 直接回车")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://vnote-bucket.oss-cn-shanghai.aliyuncs.com/image-20220416211353115.png",alt:"image-20220416211353115"}})]),s._v(" "),t("blockquote",[t("p",[t("code",[s._v("ls")]),s._v(" 查看生成的文件")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://vnote-bucket.oss-cn-shanghai.aliyuncs.com/image-20220416211808297.png",alt:"image-20220416211808297"}})]),s._v(" "),t("h3",{attrs:{id:"_2-在github-gitee-gitlab设置添加公钥"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-在github-gitee-gitlab设置添加公钥"}},[s._v("#")]),s._v(" 2.在github/gitee/gitlab设置添加公钥")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("查看生成的公钥"),t("code",[s._v(".pub")]),s._v("文件  例如: "),t("code",[s._v("cat id_rsa_github_gmail.pub")])])]),s._v(" "),t("li",[t("strong",[s._v("复制公钥所有内容 ，在github添加")])])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://vnote-bucket.oss-cn-shanghai.aliyuncs.com/image-20220416212417100.png",alt:"image-20220416212417100"}})]),s._v(" "),t("ul",[t("li",[t("p",[t("strong",[s._v("添加私钥到ssh-agent中 ，出现"),t("code",[s._v("Identity added")]),s._v("表示成功")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ssh-add ~/.ssh/id_rsa_github_qq\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])]),s._v(" "),t("blockquote",[t("p",[s._v("(若提示 "),t("code",[s._v("Could not open a connection to your authentication agent")]),s._v(")")]),s._v(" "),t("p",[s._v("先执行"),t("code",[s._v("ssh-agent bash")]),s._v(" 再执行上面代码")])]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("查看私钥列表")])])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ssh-add -l\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("出现此提示表示未配置成功，重新检查步骤配置")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("git@github.com: Permission denied "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("publickey"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".\nfatal: Could not "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v(" from remote repository.\n\nPlease "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" sure you have the correct access rights\nand the repository exists.\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("ul",[t("li",[s._v("创建config文件，并编辑 "),t("code",[s._v("vi config")])])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("Host github.com \nHostName github.com\nPreferredAuthentications publickey\nIdentityFile ~/.ssh/id_rsa_git_gmail "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#私钥地址")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("ul",[t("li",[t("p",[s._v("测试连接是否成功")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -T git@giee.com\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#或")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -T git@github.com\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);