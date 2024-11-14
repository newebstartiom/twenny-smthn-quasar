import { company, webNum, blogs } from "src/js/data";
import { helper } from "wiom-utility-library";

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("src/pages/Home.vue"),
        meta: {
          title: `Home | ${company.name}`,
          description: `Homepage ${company.name}`,
          canonical: `${company.link.full}`,
          component: {
            vect: {
              customStyle: "position: absolute; right: 18px; top: 14px",
            },
          },
        },
        layout: {
          header: false,
          footer: true,
        },
      },
      {
        path: "/#about-me",
        name: "About",
        layout: {
          header: true,
          footer: true,
        },
      },
      {
        path: "blog",
        name: "Blog",
        component: () => import("src/pages/Blog.vue"),
        meta: {
          title: `Blog | ${company.name}`,
          description: `Blog page ${company.name}`,
          canonical: `${company.link.full}/blog`,
          component: {
            vect: {
              customStyle: "position: absolute; right: 10px; top: 14px",
            },
          },
        },
        layout: {
          header: true,
          footer: true,
        },
      },
      // {
      //   path: "/blog",
      //   name: "Blog",
      //   layout: {
      //     header: true,
      //     footer: true,
      //   },
      //   meta: {
      //     title: `Blog | ${company.name}`,
      //     description: `Blog page ${company.name}`,
      //     canonical: `${company.link.full}/blog`,
      //     component: {
      //       vect: {
      //         customStyle: "position: absolute; right: 10px; top: 14px",
      //       },
      //     },
      //   },
      //   children: [
      //     {
      //       path: "/blog",
      //       name: "Blog - children",
      //       meta: {
      //         id: "blog",
      //         title: `Blog | ${company.name}`,
      //         description: `Blog page ${company.name}`,
      //         canonical: `${company.link.full}/blog`,
      //       },
      //       component: () => import("src/pages/Blog.vue"),
      //       beforeEnter(to, from, next) {
      //         console.log(to, from);
      //       },
      //     },
      //     {
      //       path: ":genre?",
      //       name: "Blog genre - children",
      //       meta: {
      //         id: "blog",
      //         title: `Blog | ${company.name}`,
      //         description: `Blog page ${company.name}`,
      //       },
      //       component: () => import("src/pages/Blog.vue"),
      //     },
      //     {
      //       path: "detail/:id?",
      //       name: "Blog Detail",
      //       component: () => import("src/pages/BlogDetail.vue"),
      //       meta: {
      //         id: "blog-details",
      //         title: `Blog Detail | ${company.name}`,
      //         description: `Blog Detail Page ${company.name}`,
      //       },
      //       beforeEnter(to, from, next) {
      //         if (!helper.isDataEmpty(to.params.id)) {
      //           var blog = null;
      //           var blogArr = blogs;

      //           if (blogArr.filter((v) => v.id == to.params.id).length > 0) {
      //             blog = blogArr.filter((v) => v.id == to.params.id)[0];
      //             to.meta.title = `${blog.title}`;
      //             to.meta.description = `${blog.meta.description} | ${company.name}`;
      //             if (blog.meta.keyword) {
      //               var keywords = "";
      //               blog.meta.keyword.forEach((v, index) => {
      //                 keywords += `${v}${
      //                   blog.meta.keyword.length != index + 1 ? ", " : ""
      //                 }`;
      //               });
      //               to.meta.keywords = `${keywords}`;
      //             }
      //             next();
      //           } else {
      //             next("/blog-detail-not-found");
      //           }
      //         } else {
      //           next("/blog-detail-not-found");
      //         }
      //       },
      //     },
      //   ],
      // },
      {
        path: "",
        name: "Work with me",
        meta: {
          link: company.link.copyWave,
        },
        layout: {
          header: true,
          footer: false,
        },
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("src/pages/404NotFound.vue"),
  },
];

export default routes;
