export const mock = {
    currentMember: [
        {
            id: 0,
            thumbnail: 'https://composite.pusan.ac.kr/sites/composite/atchmnfl/pnuProfl/1055/temp_1527566174779100.jpg',
            name: '김3샘플',
            email: 'jrha@rime.re.kr',
            website: 'http://',
            mobile: '010-0000-0000',
            phone: '051-9714-5562',
            position: '박사과정 (Ph.D. Candidate) | part time',
            field: '복합재료 제조 및 난연 특성 평가',
            field_eng: 'Manufacturing process of composite materials'

        },
        {
            id: 1,
            thumbnail: 'https://composite.pusan.ac.kr/sites/composite/atchmnfl/pnuProfl/1055/temp_1527566174779100.jpg',
            name: '하종록 (JONG ROK JA)',
            position: '박사과정 (Ph.D. Candidate) | part time',
            field: '복합재료 제조 및 난연 특성 평가',
            field_eng: 'Manufacturing process of composite materials'
        }
    ],
    publication: [
        {
            category: '논문',
            data: [
                {
                    published_year: '2020',
                    books: [
                        {
                            description: '2222Effect of caprolactam modified phenoxy-based sizing material on reactive process of carbon fiber-reinforced thermoplastic polyamide-6',
                            reference: 'COMPOSITES PART A-APPLIED SCIENCE AND MANUFACTURING, ELSEVIER SCI LTD, 2020-10',
                            authors: [
                                {
                                    name: '성동기', // 성명
                                    position: '조교수', // 직급명
                                    university: '부산대학교', //대학
                                    major: '응용학과', // 학과
                                    role: '공동(참여)-내부', // 연구원구분
                                    role_number: '409' // 참여구분
                                },
                                {
                                    name: '김상우',
                                    position: '조교수',
                                    university: '부산대학교',
                                    major: '응용학과',
                                    role: '공동(참여)-내부',
                                    role_number: '409'
                                },
                                {
                                    name: '박태훈',
                                    position: '조교수',
                                    university: '부산대학교',
                                    major: '응용학과',
                                    role: '공동(참여)-내부',
                                    role_number: '409'
                                },
                            ]
                        },
                        {
                            description: '1111Effect of caprolactam modified phenoxy-based sizing material on reactive process of carbon fiber-reinforced thermoplastic polyamide-6',
                            reference: 'COMPOSITES PART A-APPLIED SCIENCE AND MANUFACTURING, ELSEVIER SCI LTD, 2020-10',
                            authors: [
                                {
                                    name: '성동기', // 성명
                                    position: '조교수', // 직급명
                                    university: '부산대학교', //대학
                                    major: '응용학과', // 학과
                                    role: '공동(참여)-내부', // 연구원구분
                                    role_number: '409' // 참여구분
                                },
                                {
                                    name: '김상우',
                                    position: '조교수',
                                    university: '부산대학교',
                                    major: '응용학과',
                                    role: '공동(참여)-내부',
                                    role_number: '409'
                                },
                                {
                                    name: '박태훈',
                                    position: '조교수',
                                    university: '부산대학교',
                                    major: '응용학과',
                                    role: '공동(참여)-내부',
                                    role_number: '409'
                                },
                            ]
                        }
                    ]

                },
            ]
        }
    ],
    gallery: [
        {
            id: 0,
            title: '[취업] 현대자동차 연구장학생 선발: 이재효 학생',
            author: '성동기',
            created_date: '2020.04.03',
            modified_date: '2020.08.30',
            hits: 122,
            cover: 'https://composite.pusan.ac.kr:443/dext5editordata/2020/09/20200915_150349200_33270.jpg',
            content: '<p>asdf<p>',
            attachment: [
                {
                    file_id: 'asdf',
                    name: 'atttcccccc.png',
                    download_url: 'https://',
                }
            ]
        },
    ],

    viewerHtml: "\n" +
        " <p><img\n" +
        "                    src=\"https://uicdn.toast.com/toastui/img/tui-editor-bi.png\" alt=\"image\"/>\n" +
        "                </p>\n" +
        "                <h1>Awesome Editor!</h1>\n" +
        "                <p>It has been <em>released as opensource in 2018</em> and has <del>continually</del> evolved\n" +
        "                    to <strong>receive 10k GitHub ⭐️ Stars</strong>.\n" +
        "                </p>\n" +
        "                <h2>Create Instance</h2>\n" +
        "                <p>You can create an instance with the following code and use <code\n" +
        "                    data-backticks=\"1\">getHtml()</code> and <code data-backticks=\"1\">getMarkdown()</code> of\n" +
        "                    the <a href=\"https://github.com/nhn/tui.editor\">Editor</a>.</p>\n" +
        "                <pre className=\"lang-js\"><code data-language=\"js\">const editor = new Editor(options);\n" +
        "</code></pre>\n" +
        "                <blockquote>\n" +
        "                    <p>See the table below for default options</p>\n" +
        "                    <blockquote>\n" +
        "                        <p>More API information can be found in the document</p>\n" +
        "                    </blockquote>\n" +
        "                </blockquote>\n" +
        "                <table>\n" +
        "                    <thead>\n" +
        "                    <tr>\n" +
        "                        <th>name</th>\n" +
        "                        <th>type</th>\n" +
        "                        <th>description</th>\n" +
        "                    </tr>\n" +
        "                    </thead>\n" +
        "                    <tbody>\n" +
        "                    <tr>\n" +
        "                        <td>el</td>\n" +
        "                        <td><code data-backticks=\"1\">HTMLElement</code></td>\n" +
        "                        <td>container element</td>\n" +
        "                    </tr>\n" +
        "                    </tbody>\n" +
        "                </table>\n" +
        "                <h2>Features</h2>\n" +
        "                <ul>\n" +
        "                    <li>CommonMark + GFM Specifications\n" +
        "                        <ul>\n" +
        "                            <li>Live Preview</li>\n" +
        "                            <li>Scroll Sync</li>\n" +
        "                            <li>Auto Indent</li>\n" +
        "                            <li>Syntax Highlight\n" +
        "                                <ol>\n" +
        "                                    <li>Markdown</li>\n" +
        "                                    <li>Preview</li>\n" +
        "                                </ol>\n" +
        "                            </li>\n" +
        "                        </ul>\n" +
        "                    </li>\n" +
        "                </ul>\n" +
        "                <h2>Support Wrappers</h2>\n" +
        "                <blockquote>\n" +
        "                    <ul>\n" +
        "                        <li>Wrappers\n" +
        "                            <ol>\n" +
        "                                <li className=\"task-list-item checked\" data-te-task=\"\">React</li>\n" +
        "                                <li className=\"task-list-item checked\" data-te-task=\"\">Vue</li>\n" +
        "                                <li className=\"task-list-item\" data-te-task=\"\">Ember</li>\n" +
        "                            </ol>\n" +
        "                        </li>\n" +
        "                    </ul>\n" +
        "                </blockquote>\n" +
        "\n",
};