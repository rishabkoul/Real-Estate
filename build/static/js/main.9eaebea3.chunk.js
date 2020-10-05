(this.webpackJsonpfrontend = this.webpackJsonpfrontend || []).push([
  [0],
  {
    41: function (e, a, t) {
      e.exports = t.p + "static/media/house.54ad755d.jpg";
    },
    47: function (e, a, t) {
      e.exports = t(95);
    },
    94: function (e, a, t) {},
    95: function (e, a, t) {
      "use strict";
      t.r(a);
      var l = t(0),
        n = t.n(l),
        c = t(22),
        s = t.n(c),
        i = t(6),
        r = t(5),
        o = t(2),
        m = t(8),
        u = t(16),
        _ = t(7),
        p = t(4),
        d = t.n(p),
        E = t(25),
        g = t.n(E),
        h = t(1),
        f = function (e) {
          var a = Object(l.useState)({
              sale_type: "For Sale",
              price: "\u20b90+",
              bedrooms: "0+",
              home_type: "House",
              bathrooms: "0+",
              sqft: "1000+",
              days_listed: "1 or less",
              has_photos: "1+",
              keywords: "",
            }),
            t = Object(o.a)(a, 2),
            c = t[0],
            s = t[1],
            i = c.sale_type,
            r = c.price,
            m = c.bedrooms,
            p = c.home_type,
            E = c.bathrooms,
            h = c.sqft,
            f = c.days_listed,
            N = c.has_photos,
            v = c.keywords,
            b = Object(l.useState)(!1),
            y = Object(o.a)(b, 2),
            O = y[0],
            j = y[1],
            w = function (e) {
              return s(
                Object(_.a)(
                  Object(_.a)({}, c),
                  {},
                  Object(u.a)({}, e.target.name, e.target.value)
                )
              );
            };
          return n.a.createElement(
            "form",
            {
              className: "lisitngform",
              onSubmit: function (a) {
                return (function (a) {
                  a.preventDefault(),
                    (d.a.defaults.headers = {
                      "Content-Type": "application/json",
                    }),
                    j(!0),
                    d.a
                      .post(
                        "http://rishabkoul.pythonanywhere.com/api/listings/search/",
                        {
                          sale_type: i,
                          price: r,
                          bedrooms: m,
                          home_type: p,
                          bathrooms: E,
                          sqft: h,
                          days_listed: f,
                          has_photos: N,
                          keywords: v,
                        }
                      )
                      .then(function (a) {
                        j(!1),
                          console.log(a.data),
                          e.setListings(a.data),
                          window.scrollTo(0, 0);
                      })
                      .catch(function (e) {
                        j(!1), window.scrollTo(0, 0);
                      });
                })(a);
              },
            },
            n.a.createElement(
              "div",
              { className: "row" },
              n.a.createElement(
                "div",
                { className: "col-1-of-6" },
                n.a.createElement(
                  "div",
                  { className: "lisitngform__section" },
                  n.a.createElement(
                    "label",
                    { className: "lisitngform__label", htmlFor: "sale_type" },
                    "Sale or Rent"
                  ),
                  n.a.createElement(
                    "select",
                    {
                      className: "lisitngform__select",
                      name: "sale_type",
                      onChange: function (e) {
                        return w(e);
                      },
                      value: i,
                    },
                    n.a.createElement("option", null, "For Sale"),
                    n.a.createElement("option", null, "For Rent")
                  )
                ),
                n.a.createElement(
                  "div",
                  { className: "lisitngform__section" },
                  n.a.createElement(
                    "label",
                    { className: "lisitngform__label", htmlFor: "sqft" },
                    "Sqft"
                  ),
                  n.a.createElement(
                    "select",
                    {
                      className: "lisitngform__select",
                      name: "sqft",
                      onChange: function (e) {
                        return w(e);
                      },
                      value: h,
                    },
                    n.a.createElement("option", null, "1000+"),
                    n.a.createElement("option", null, "1200+"),
                    n.a.createElement("option", null, "1500+"),
                    n.a.createElement("option", null, "2000+"),
                    n.a.createElement("option", null, "Any")
                  )
                )
              ),
              n.a.createElement(
                "div",
                { className: "col-1-of-6" },
                n.a.createElement(
                  "div",
                  { className: "lisitngform__section" },
                  n.a.createElement(
                    "label",
                    { className: "lisitngform__label", htmlFor: "price" },
                    "Minimum Price"
                  ),
                  n.a.createElement(
                    "select",
                    {
                      className: "lisitngform__select",
                      name: "price",
                      onChange: function (e) {
                        return w(e);
                      },
                      value: r,
                    },
                    n.a.createElement("option", null, "\u20b90+"),
                    n.a.createElement("option", null, "\u20b91,00,00,000+"),
                    n.a.createElement("option", null, "\u20b92,00,00,000+"),
                    n.a.createElement("option", null, "\u20b93,00,00,000+"),
                    n.a.createElement("option", null, "\u20b94,00,00,000+"),
                    n.a.createElement("option", null, "\u20b95,00,00,000+"),
                    n.a.createElement("option", null, "\u20b96,00,00,000+"),
                    n.a.createElement("option", null, "\u20b97,00,00,000+"),
                    n.a.createElement("option", null, "Any")
                  )
                ),
                n.a.createElement(
                  "div",
                  { className: "lisitngform__section" },
                  n.a.createElement(
                    "label",
                    { className: "lisitngform__label", htmlFor: "days_listed" },
                    "Days Listed"
                  ),
                  n.a.createElement(
                    "select",
                    {
                      className: "lisitngform__select",
                      name: "days_listed",
                      onChange: function (e) {
                        return w(e);
                      },
                      value: f,
                    },
                    n.a.createElement("option", null, "1 or less"),
                    n.a.createElement("option", null, "2 or less"),
                    n.a.createElement("option", null, "5 or less"),
                    n.a.createElement("option", null, "10 or less"),
                    n.a.createElement("option", null, "20 or less"),
                    n.a.createElement("option", null, "Any")
                  )
                )
              ),
              n.a.createElement(
                "div",
                { className: "col-1-of-6" },
                n.a.createElement(
                  "div",
                  { className: "lisitngform__section" },
                  n.a.createElement(
                    "label",
                    { className: "lisitngform__label", htmlFor: "bedrooms" },
                    "Bedrooms"
                  ),
                  n.a.createElement(
                    "select",
                    {
                      className: "lisitngform__select",
                      name: "bedrooms",
                      onChange: function (e) {
                        return w(e);
                      },
                      value: m,
                    },
                    n.a.createElement("option", null, "0+"),
                    n.a.createElement("option", null, "1+"),
                    n.a.createElement("option", null, "2+"),
                    n.a.createElement("option", null, "3+"),
                    n.a.createElement("option", null, "4+"),
                    n.a.createElement("option", null, "5+")
                  )
                ),
                n.a.createElement(
                  "div",
                  { className: "lisitngform__section" },
                  n.a.createElement(
                    "label",
                    { className: "lisitngform__label", htmlFor: "has_photos" },
                    "Has Photos"
                  ),
                  n.a.createElement(
                    "select",
                    {
                      className: "lisitngform__select",
                      name: "has_photos",
                      onChange: function (e) {
                        return w(e);
                      },
                      value: N,
                    },
                    n.a.createElement("option", null, "1+"),
                    n.a.createElement("option", null, "3+"),
                    n.a.createElement("option", null, "5+"),
                    n.a.createElement("option", null, "10+"),
                    n.a.createElement("option", null, "15+")
                  )
                )
              ),
              n.a.createElement(
                "div",
                { className: "col-1-of-6" },
                n.a.createElement(
                  "div",
                  { className: "lisitngform__section" },
                  n.a.createElement(
                    "label",
                    { className: "lisitngform__label", htmlFor: "home_type" },
                    "Home Type"
                  ),
                  n.a.createElement(
                    "select",
                    {
                      className: "lisitngform__select",
                      name: "home_type",
                      onChange: function (e) {
                        return w(e);
                      },
                      value: p,
                    },
                    n.a.createElement("option", null, "House"),
                    n.a.createElement("option", null, "Condo"),
                    n.a.createElement("option", null, "Townhouse")
                  )
                ),
                n.a.createElement(
                  "div",
                  { className: "lisitngform__section" },
                  n.a.createElement(
                    "label",
                    { className: "lisitngform__label", htmlFor: "keywords" },
                    "Keywords"
                  ),
                  n.a.createElement("input", {
                    className: "lisitngform__input",
                    name: "keywords",
                    type: "text",
                    onChange: function (e) {
                      return w(e);
                    },
                    value: v,
                  })
                )
              ),
              n.a.createElement(
                "div",
                { className: "col-1-of-6" },
                n.a.createElement(
                  "div",
                  { className: "lisitngform__section" },
                  n.a.createElement(
                    "label",
                    { className: "lisitngform__label", htmlFor: "bathrooms" },
                    "Baths"
                  ),
                  n.a.createElement(
                    "select",
                    {
                      className: "lisitngform__select",
                      name: "bathrooms",
                      onChange: function (e) {
                        return w(e);
                      },
                      value: E,
                    },
                    n.a.createElement("option", null, "0+"),
                    n.a.createElement("option", null, "1+"),
                    n.a.createElement("option", null, "2+"),
                    n.a.createElement("option", null, "3+"),
                    n.a.createElement("option", null, "4+")
                  )
                )
              ),
              n.a.createElement(
                "div",
                { className: "col-1-of-6" },
                O
                  ? n.a.createElement(
                      "div",
                      { className: "lisitngform__loader" },
                      n.a.createElement(g.a, {
                        type: "Oval",
                        color: "#424242",
                        height: 50,
                        width: 50,
                      })
                    )
                  : n.a.createElement(
                      "button",
                      {
                        className:
                          "lisitngform__button lisitngform__button--primary",
                      },
                      "Save"
                    )
              )
            )
          );
        };
      f.protoTypes = { setListings: t.n(h).a.func.isRequired };
      var N = f,
        v = function (e) {
          return n.a.createElement(
            "div",
            { className: "card" },
            n.a.createElement("h3", { className: "card__title" }, e.title),
            n.a.createElement(
              "div",
              { className: "card__header" },
              n.a.createElement("img", {
                className: "card__header__photo",
                src: e.photo_main,
                alt: "House",
              })
            ),
            n.a.createElement(
              "p",
              { className: "card__location" },
              e.address,
              ",",
              e.city,
              ",",
              e.state
            ),
            n.a.createElement(
              "div",
              { className: "row" },
              n.a.createElement(
                "div",
                { className: "col-2-of-3" },
                n.a.createElement(
                  "p",
                  { className: "card__info" },
                  "Price : \u20b9",
                  e.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                ),
                n.a.createElement(
                  "p",
                  { className: "card__info" },
                  "Bedrooms: ",
                  e.bedrooms
                ),
                n.a.createElement(
                  "p",
                  { className: "card__info" },
                  "Bathrooms: ",
                  e.bathrooms
                )
              ),
              n.a.createElement(
                "div",
                { className: "col-1-of-3" },
                n.a.createElement(
                  "p",
                  { className: "card__saletype" },
                  e.sale_type
                ),
                n.a.createElement(
                  "p",
                  { className: "card__hometype" },
                  e.home_type
                ),
                n.a.createElement(
                  "p",
                  { className: "card__sqft" },
                  "Sqft: ",
                  e.sqft
                )
              )
            ),
            n.a.createElement(
              i.b,
              { className: "card__link", to: "/listings/".concat(e.slug) },
              "View Listing"
            )
          );
        },
        b = function (e) {
          var a = e.lisitngs;
          return n.a.createElement(
            "div",
            null,
            (function () {
              var e = [],
                t = [];
              a.map(function (a) {
                return e.push(
                  n.a.createElement(v, {
                    title: a.title,
                    address: a.address,
                    city: a.city,
                    state: a.state,
                    price: a.price,
                    sale_type: a.sale_type,
                    home_type: a.home_type,
                    bedrooms: a.bedrooms,
                    bathrooms: a.bathrooms,
                    sqft: a.sqft,
                    photo_main: a.photo_main,
                    slug: a.slug,
                  })
                );
              });
              for (var l = 0; l < a.length; l += 3)
                t.push(
                  n.a.createElement(
                    "div",
                    { className: "row" },
                    n.a.createElement("div", { className: "col-1-of-3" }, e[l]),
                    n.a.createElement(
                      "div",
                      { className: "col-1-of-3" },
                      e[l + 1] ? e[l + 1] : null
                    ),
                    n.a.createElement(
                      "div",
                      { className: "col-1-of-3" },
                      e[l + 2] ? e[l + 2] : null
                    )
                  )
                );
              return t;
            })()
          );
        },
        y = function (e) {
          return n.a.createElement(
            "div",
            { className: "pagination" },
            n.a.createElement(
              "div",
              {
                onClick: function () {
                  return e.previous();
                },
                className: "pagination__number",
              },
              "Previous"
            ),
            (function () {
              for (
                var a = [],
                  t = e.itemsPerPage,
                  l = 1,
                  c = function (t) {
                    var c = l,
                      s = "pagination__number",
                      i = null;
                    e.active === c
                      ? ((s = "pagination__number pagination__number--active"),
                        (i = n.a.createElement(
                          "div",
                          { key: t, className: s },
                          l
                        )))
                      : (i = n.a.createElement(
                          "div",
                          {
                            key: t,
                            onClick: function () {
                              return e.visitPage(c);
                            },
                            className: s,
                          },
                          l
                        )),
                      a.push(i),
                      l++;
                  },
                  s = 0;
                s < e.count;
                s += t
              )
                c(s);
              return a;
            })(),
            n.a.createElement(
              "div",
              {
                onClick: function () {
                  return e.next();
                },
                className: "pagination__number",
              },
              "Next"
            )
          );
        },
        O = function () {
          var e = Object(l.useState)([]),
            a = Object(o.a)(e, 2),
            t = a[0],
            c = a[1],
            s = Object(l.useState)(1),
            i = Object(o.a)(s, 2),
            r = i[0],
            u = i[1],
            _ = Object(l.useState)(3),
            p = Object(o.a)(_, 2),
            d = p[0],
            E = (p[1], Object(l.useState)(1)),
            g = Object(o.a)(E, 2),
            h = g[0],
            f = g[1],
            v = r * d,
            O = v - d,
            j = t.slice(O, v);
          return n.a.createElement(
            "main",
            { className: "home" },
            n.a.createElement(
              m.a,
              null,
              n.a.createElement("title", null, "Real Estate - Home"),
              n.a.createElement("meta", {
                name: "description",
                content: "Real Estate Home Page",
              })
            ),
            n.a.createElement(
              "section",
              { className: "home__form" },
              n.a.createElement(N, { setListings: c })
            ),
            n.a.createElement(
              "section",
              { className: "home__lisitngs" },
              n.a.createElement(b, { lisitngs: j })
            ),
            n.a.createElement(
              "section",
              { className: "home__pagination" },
              n.a.createElement(
                "div",
                { className: "row" },
                0 !== t.length
                  ? n.a.createElement(y, {
                      itemsPerPage: d,
                      count: t.length,
                      visitingPage: function (e) {
                        u(e), f(e);
                      },
                      previous: function () {
                        1 !== r && (u(r - 1), f(r - 1));
                      },
                      next: function () {
                        r !== Math.ceil(t.length / 3) && (u(r + 1), f(r + 1));
                      },
                      active: h,
                      setActive: f,
                    })
                  : null
              )
            )
          );
        },
        j = t(14),
        w = t.n(j),
        S = t(18),
        k = t(41),
        x = t.n(k),
        C = function () {
          var e = Object(l.useState)([]),
            a = Object(o.a)(e, 2),
            t = a[0],
            c = a[1],
            s = Object(l.useState)([]),
            i = Object(o.a)(s, 2),
            r = i[0],
            u = i[1];
          Object(l.useEffect)(function () {
            (d.a.defaults.headers = { "Content-Type": "application/json" }),
              (function () {
                var e = Object(S.a)(
                  w.a.mark(function e() {
                    var a;
                    return w.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                (e.next = 3),
                                d.a.get(
                                  "http://rishabkoul.pythonanywhere.com/api/realtors/topseller/"
                                )
                              );
                            case 3:
                              (a = e.sent), c(a.data), (e.next = 9);
                              break;
                            case 7:
                              (e.prev = 7), (e.t0 = e.catch(0));
                            case 9:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 7]]
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()();
          }, []),
            Object(l.useEffect)(function () {
              (d.a.defaults.headers = { "Content-Type": "application/json" }),
                (function () {
                  var e = Object(S.a)(
                    w.a.mark(function e() {
                      var a;
                      return w.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (e.next = 3),
                                  d.a.get(
                                    "http://rishabkoul.pythonanywhere.com/api/realtors/"
                                  )
                                );
                              case 3:
                                (a = e.sent), u(a.data), (e.next = 9);
                                break;
                              case 7:
                                (e.prev = 7), (e.t0 = e.catch(0));
                              case 9:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[0, 7]]
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })()();
            }, []);
          return n.a.createElement(
            "main",
            { className: "about" },
            n.a.createElement(
              m.a,
              null,
              n.a.createElement("title", null, "Real Estate - About"),
              n.a.createElement("meta", {
                name: "description",
                content: "About us",
              })
            ),
            n.a.createElement(
              "header",
              { className: "about__header" },
              n.a.createElement(
                "h1",
                { className: "about__heading" },
                "About Real Estate"
              )
            ),
            n.a.createElement(
              "section",
              { className: "about__info" },
              n.a.createElement(
                "div",
                { className: "row" },
                n.a.createElement(
                  "div",
                  { className: "col-3-of-4" },
                  n.a.createElement(
                    "h2",
                    { className: "about__subheading" },
                    "We Find the perfect home for you"
                  ),
                  n.a.createElement(
                    "p",
                    { className: "about__paragraph" },
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit facilis eaque repellat quia, quaerat sed quibusdam eos, iste voluptatum quae aut corrupti quis, nisi quam doloremque nesciunt adipisci molestiae rerum!"
                  ),
                  n.a.createElement(
                    "div",
                    { className: "about__display" },
                    n.a.createElement("img", {
                      className: "about__display__image",
                      src: x.a,
                      alt: "",
                    })
                  ),
                  n.a.createElement(
                    "p",
                    { className: "about__paragraph" },
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illum a dolorem officia? Quam voluptates debitis magni dolore excepturi suscipit, non dolorum tempore ratione ex, natus animi. Quidem pariatur, mollitia, atque nulla omnis rem tempore aperiam, et ipsum rerum minus?"
                  )
                ),
                n.a.createElement(
                  "div",
                  { className: "col-1-of-4" },
                  (function () {
                    var e = [];
                    return (
                      t.map(function (a) {
                        return e.push(
                          n.a.createElement(
                            l.Fragment,
                            { key: a.id },
                            n.a.createElement(
                              "div",
                              { className: "about__display" },
                              n.a.createElement("img", {
                                className: "about__display__image",
                                src: a.photo,
                                alt: "",
                              })
                            ),
                            n.a.createElement(
                              "h3",
                              { className: "about__topseller" },
                              "Top Seller:"
                            ),
                            n.a.createElement(
                              "p",
                              { className: "about__realtor" },
                              a.name
                            ),
                            n.a.createElement(
                              "p",
                              { className: "about__contact" },
                              a.phone
                            ),
                            n.a.createElement(
                              "p",
                              { className: "about__contact" },
                              a.email
                            ),
                            n.a.createElement(
                              "p",
                              { className: "about__about" },
                              a.description
                            )
                          )
                        );
                      }),
                      e
                    );
                  })()
                )
              )
            ),
            n.a.createElement(
              "section",
              { className: "about__team" },
              n.a.createElement(
                "div",
                { className: "row" },
                n.a.createElement(
                  "h2",
                  { className: "about__subheading" },
                  "Meet our awesome team!"
                )
              ),
              (function () {
                var e = [],
                  a = [];
                r.map(function (a) {
                  return e.push(
                    n.a.createElement(
                      l.Fragment,
                      { key: a.id },
                      n.a.createElement(
                        "div",
                        { className: "about__display" },
                        n.a.createElement("img", {
                          className: "about__display__image",
                          src: a.photo,
                          alt: "",
                        })
                      ),
                      n.a.createElement(
                        "h3",
                        { className: "about__realtor" },
                        a.name
                      ),
                      n.a.createElement(
                        "p",
                        { className: "about__contact" },
                        a.phone
                      ),
                      n.a.createElement(
                        "p",
                        { className: "about__contact" },
                        a.email
                      ),
                      n.a.createElement(
                        "p",
                        { className: "about__about" },
                        a.description
                      )
                    )
                  );
                });
                for (var t = 0; t < r.length; t += 3)
                  a.push(
                    n.a.createElement(
                      "div",
                      { key: t, className: "row" },
                      n.a.createElement(
                        "div",
                        { className: "col-1-of-3" },
                        e[t]
                      ),
                      n.a.createElement(
                        "div",
                        { className: "col-1-of-3" },
                        e[t + 1] ? e[t + 1] : null
                      ),
                      n.a.createElement(
                        "div",
                        { className: "col-1-of-3" },
                        e[t + 2] ? e[t + 2] : null
                      )
                    )
                  );
                return a;
              })()
            )
          );
        },
        A = t(9),
        L = t(97),
        q = function (e, a) {
          var t =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 5e3;
          return function (l) {
            var n = Object(L.a)();
            l({ type: "SET_ALERT", payload: { msg: e, alertType: a, id: n } }),
              setTimeout(function () {
                return l({ type: "REMOVE_ALERT", payload: n });
              }, t);
          };
        },
        T = Object(A.b)(null, { setAlert: q })(function (e) {
          var a = e.setAlert;
          Object(l.useEffect)(function () {
            window.scrollTo(0, 0);
          }, []);
          var t = Object(l.useState)({
              name: "",
              email: "",
              subject: "",
              message: "",
            }),
            c = Object(o.a)(t, 2),
            s = c[0],
            i = c[1],
            r = s.name,
            p = s.email,
            E = s.subject,
            h = s.message,
            f = Object(l.useState)(!1),
            N = Object(o.a)(f, 2),
            v = N[0],
            b = N[1],
            y = function (e) {
              return i(
                Object(_.a)(
                  Object(_.a)({}, s),
                  {},
                  Object(u.a)({}, e.target.name, e.target.value)
                )
              );
            };
          return n.a.createElement(
            "div",
            { className: "contact" },
            n.a.createElement(
              m.a,
              null,
              n.a.createElement("title", null, "Real Estate - Contact"),
              n.a.createElement("meta", {
                name: "description",
                content: "Contact us",
              })
            ),
            n.a.createElement(
              "form",
              {
                className: "contact__form",
                onSubmit: function (e) {
                  return (function (e) {
                    e.preventDefault(),
                      (d.a.defaults.headers = {
                        "Content-Type": "application/json",
                      }),
                      b(!0),
                      d.a
                        .post(
                          "http://rishabkoul.pythonanywhere.com/api/contacts/",
                          { name: r, email: p, subject: E, message: h }
                        )
                        .then(function (e) {
                          a("Message Sent", "success"),
                            b(!1),
                            window.scrollTo(0, 0);
                        })
                        .catch(function (e) {
                          a("Error with Sending Message", "error"),
                            b(!1),
                            window.scrollTo(0, 0);
                        });
                  })(e);
                },
              },
              n.a.createElement(
                "label",
                { className: "contact__form__label", htmlFor: "name" },
                "Name*"
              ),
              n.a.createElement("input", {
                className: "contact__form__input",
                type: "text",
                name: "name",
                placeholder: "Full Name",
                onChange: function (e) {
                  return y(e);
                },
                value: r,
                required: !0,
              }),
              n.a.createElement(
                "label",
                { className: "contact__form__label", htmlFor: "email" },
                "Email*"
              ),
              n.a.createElement("input", {
                className: "contact__form__input",
                type: "email",
                name: "email",
                placeholder: "example@gmail.com",
                onChange: function (e) {
                  return y(e);
                },
                value: p,
                required: !0,
              }),
              n.a.createElement(
                "label",
                { className: "contact__form__label", htmlFor: "subject" },
                "Subject*"
              ),
              n.a.createElement("input", {
                className: "contact__form__input",
                type: "text",
                name: "subject",
                placeholder: "Buying Home",
                onChange: function (e) {
                  return y(e);
                },
                value: E,
                required: !0,
              }),
              n.a.createElement(
                "label",
                { className: "contact__form__label", htmlFor: "message" },
                "Message"
              ),
              n.a.createElement("textarea", {
                className: "contact__form__textarea",
                name: "message",
                placeholder: "Message",
                cols: "30",
                rows: "10",
                onChange: function (e) {
                  return y(e);
                },
                value: h,
              }),
              v
                ? n.a.createElement(
                    "div",
                    { className: "contact__form__loader" },
                    n.a.createElement(g.a, {
                      type: "Oval",
                      color: "#424242",
                      height: 50,
                      width: 50,
                    })
                  )
                : n.a.createElement(
                    "button",
                    { className: "contact__form__button", htmltype: "submit" },
                    "Send"
                  )
            )
          );
        }),
        F = function () {
          var e = Object(l.useState)([]),
            a = Object(o.a)(e, 2),
            t = a[0],
            c = a[1],
            s = Object(l.useState)(0),
            i = Object(o.a)(s, 2),
            r = i[0],
            u = i[1],
            _ = Object(l.useState)(""),
            p = Object(o.a)(_, 2),
            E = p[0],
            g = p[1],
            h = Object(l.useState)(""),
            f = Object(o.a)(h, 2),
            N = f[0],
            b = f[1],
            O = Object(l.useState)(1),
            j = Object(o.a)(O, 2),
            k = j[0],
            x = j[1];
          Object(l.useEffect)(function () {
            window.scrollTo(0, 0),
              (function () {
                var e = Object(S.a)(
                  w.a.mark(function e() {
                    var a;
                    return w.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                (e.next = 3),
                                d.a.get(
                                  "http://rishabkoul.pythonanywhere.com/api/listings/?page=1"
                                )
                              );
                            case 3:
                              (a = e.sent),
                                c(a.data.results),
                                u(a.data.count),
                                g(a.data.previous),
                                b(a.data.next),
                                (e.next = 12);
                              break;
                            case 10:
                              (e.prev = 10), (e.t0 = e.catch(0));
                            case 12:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 10]]
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()();
          }, []);
          return n.a.createElement(
            "div",
            { className: "listings" },
            n.a.createElement(
              m.a,
              null,
              n.a.createElement("title", null, "Real Estate - Listings"),
              n.a.createElement("meta", {
                name: "description",
                content: "Listings page",
              })
            ),
            n.a.createElement(
              "section",
              { className: "listings__listings" },
              (function () {
                var e = [],
                  a = [];
                t.map(function (a) {
                  return e.push(
                    n.a.createElement(v, {
                      title: a.title,
                      address: a.address,
                      city: a.city,
                      state: a.state,
                      price: a.price,
                      sale_type: a.sale_type,
                      home_type: a.home_type,
                      bedrooms: a.bedrooms,
                      bathrooms: a.bathrooms,
                      sqft: a.sqft,
                      photo_main: a.photo_main,
                      slug: a.slug,
                    })
                  );
                });
                for (var l = 0; l < t.length; l += 3)
                  a.push(
                    n.a.createElement(
                      "div",
                      { key: l, className: "row" },
                      n.a.createElement(
                        "div",
                        { className: "col-1-of-3" },
                        e[l]
                      ),
                      n.a.createElement(
                        "div",
                        { className: "col-1-of-3" },
                        e[l + 1] ? e[l + 1] : null
                      ),
                      n.a.createElement(
                        "div",
                        { className: "col-1-of-3" },
                        e[l + 2] ? e[l + 2] : null
                      )
                    )
                  );
                return a;
              })()
            ),
            n.a.createElement(
              "section",
              { className: "listings__pagination" },
              n.a.createElement(
                "div",
                { className: "row" },
                n.a.createElement(y, {
                  itemsPerPage: 3,
                  count: r,
                  visitingPage: function (e) {
                    d.a
                      .get(
                        "http://rishabkoul.pythonanywhere.com/api/listings/?page=".concat(
                          e
                        )
                      )
                      .then(function (a) {
                        c(a.data.results),
                          g(a.data.previous),
                          b(a.data.next),
                          x(e);
                      })
                      .catch(function (e) {});
                  },
                  previous: function () {
                    d.a
                      .get(E)
                      .then(function (e) {
                        c(e.data.results),
                          g(e.data.previous),
                          b(e.data.next),
                          E && x(k - 1);
                      })
                      .catch(function (e) {});
                  },
                  next: function () {
                    d.a
                      .get(N)
                      .then(function (e) {
                        c(e.data.results),
                          g(e.data.previous),
                          b(e.data.next),
                          N && x(k + 1);
                      })
                      .catch(function (e) {});
                  },
                  active: k,
                  setActive: x,
                })
              )
            )
          );
        },
        P = function (e) {
          var a = Object(l.useState)({}),
            t = Object(o.a)(a, 2),
            c = t[0],
            s = t[1],
            r = Object(l.useState)({}),
            u = Object(o.a)(r, 2),
            _ = u[0],
            p = u[1],
            E = Object(l.useState)(0),
            g = Object(o.a)(E, 2),
            h = g[0],
            f = g[1];
          Object(l.useEffect)(
            function () {
              var a = e.match.params.id,
                t = {
                  headers: {
                    Authorization: "Bearer ".concat(
                      localStorage.getItem("token")
                    ),
                  },
                };
              d.a
                .get(
                  "http://rishabkoul.pythonanywhere.com/api/listings/".concat(
                    a
                  ),
                  t
                )
                .then(function (e) {
                  s(e.data),
                    f(
                      e.data.price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    );
                })
                .catch(function (e) {});
            },
            [e.match.params.id]
          ),
            Object(l.useEffect)(
              function () {
                var e = c.realtor,
                  a = {
                    headers: {
                      Authorization: "Bearer ".concat(
                        localStorage.getItem("token")
                      ),
                    },
                  };
                e &&
                  d.a
                    .get(
                      "http://rishabkoul.pythonanywhere.com/api/realtors/".concat(
                        e
                      ),
                      a
                    )
                    .then(function (e) {
                      p(e.data);
                    })
                    .catch(function (e) {});
              },
              [c.realtor]
            );
          return n.a.createElement(
            "div",
            { className: "listingdetail" },
            n.a.createElement(
              m.a,
              null,
              n.a.createElement(
                "title",
                null,
                "Real Estate - Listing | ",
                "".concat(c.title)
              ),
              n.a.createElement("meta", {
                name: "description",
                content: "Listing detail",
              })
            ),
            n.a.createElement(
              "div",
              { className: "listingdetail__header" },
              n.a.createElement(
                "h1",
                { className: "listingdetail__title" },
                c.title
              ),
              n.a.createElement(
                "p",
                { className: "listingdetail__location" },
                c.city,
                ", ",
                c.state,
                ", ",
                c.zipcode
              )
            ),
            n.a.createElement(
              "div",
              { className: "row" },
              n.a.createElement(
                "div",
                { className: "listingdetail__breadcrumb" },
                n.a.createElement(
                  i.b,
                  { className: "listingdetail__bredcrumb__link", to: "/" },
                  "Home"
                ),
                " ",
                "/ ",
                c.title
              )
            ),
            n.a.createElement(
              "div",
              { className: "row" },
              n.a.createElement(
                "div",
                { className: "col-3-of-4" },
                n.a.createElement(
                  "div",
                  { className: "listingdetail__display" },
                  n.a.createElement("img", {
                    className: "listingdetail__display__image",
                    src: c.photo_main,
                    alt: "",
                  })
                )
              ),
              n.a.createElement(
                "div",
                { className: "col-1-of-4" },
                n.a.createElement(
                  "div",
                  { className: "listingdetail__display" },
                  n.a.createElement("img", {
                    className: "listingdetail__display__image",
                    src: _.photo,
                    alt: "",
                  })
                ),
                n.a.createElement(
                  "h3",
                  { className: "listingdetail__realtor" },
                  _.name
                ),
                n.a.createElement(
                  "p",
                  { className: "listingdetail__contact" },
                  _.phone
                ),
                n.a.createElement(
                  "p",
                  { className: "listingdetail__contact" },
                  _.email
                ),
                n.a.createElement(
                  "p",
                  { className: "listingdetail__about" },
                  _.description
                )
              )
            ),
            n.a.createElement(
              "div",
              { className: "row" },
              n.a.createElement(
                "div",
                { className: "col-1-of-2" },
                n.a.createElement(
                  "ul",
                  { className: "listingdetail__list" },
                  n.a.createElement(
                    "li",
                    { className: "listingdetail__item" },
                    "Home Type: ",
                    c.home_type
                  ),
                  n.a.createElement(
                    "li",
                    { className: "listingdetail__item" },
                    "Price: \u20b9",
                    h
                  ),
                  n.a.createElement(
                    "li",
                    { className: "listingdetail__item" },
                    "Bedrooms: ",
                    c.bedrooms
                  ),
                  n.a.createElement(
                    "li",
                    { className: "listingdetail__item" },
                    "Bathrooms: ",
                    c.bathrooms
                  ),
                  n.a.createElement(
                    "li",
                    { className: "listingdetail__item" },
                    "Square Feet: ",
                    c.sqft
                  )
                )
              ),
              n.a.createElement(
                "div",
                { className: "col-1-of-2" },
                n.a.createElement(
                  "ul",
                  { className: "listingdetail__list" },
                  n.a.createElement(
                    "li",
                    { className: "listingdetail__item" },
                    "Sale Type: ",
                    c.sale_type
                  ),
                  n.a.createElement(
                    "li",
                    { className: "listingdetail__item" },
                    "Address: ",
                    c.address
                  ),
                  n.a.createElement(
                    "li",
                    { className: "listingdetail__item" },
                    "City: ",
                    c.city
                  ),
                  n.a.createElement(
                    "li",
                    { className: "listingdetail__item" },
                    "State: ",
                    c.state
                  ),
                  n.a.createElement(
                    "li",
                    { className: "listingdetail__item" },
                    "Zipcode: ",
                    c.zipcode
                  )
                )
              )
            ),
            n.a.createElement(
              "div",
              { className: "row" },
              n.a.createElement(
                "p",
                { className: "listingdetail__description" },
                c.description
              )
            ),
            (function () {
              var e = [];
              return (
                e.push(
                  n.a.createElement(
                    "div",
                    { key: 1, className: "row" },
                    n.a.createElement(
                      "div",
                      { className: "col-1-of-3" },
                      c.photo_1
                        ? n.a.createElement(
                            "div",
                            { className: "listingdetail__display" },
                            n.a.createElement("img", {
                              className: "listingdetail__display__image",
                              src: c.photo_1,
                              alt: "",
                            })
                          )
                        : null
                    ),
                    n.a.createElement(
                      "div",
                      { className: "col-1-of-3" },
                      c.photo_2
                        ? n.a.createElement(
                            "div",
                            { className: "listingdetail__display" },
                            n.a.createElement("img", {
                              className: "listingdetail__display__image",
                              src: c.photo_2,
                              alt: "",
                            })
                          )
                        : null
                    ),
                    n.a.createElement(
                      "div",
                      { className: "col-1-of-3" },
                      c.photo_3
                        ? n.a.createElement(
                            "div",
                            { className: "listingdetail__display" },
                            n.a.createElement("img", {
                              className: "listingdetail__display__image",
                              src: c.photo_3,
                              alt: "",
                            })
                          )
                        : null
                    )
                  )
                ),
                e.push(
                  n.a.createElement(
                    "div",
                    { key: 2, className: "row" },
                    n.a.createElement(
                      "div",
                      { className: "col-1-of-3" },
                      c.photo_4
                        ? n.a.createElement(
                            "div",
                            { className: "listingdetail__display" },
                            n.a.createElement("img", {
                              className: "listingdetail__display__image",
                              src: c.photo_4,
                              alt: "",
                            })
                          )
                        : null
                    ),
                    n.a.createElement(
                      "div",
                      { className: "col-1-of-3" },
                      c.photo_5
                        ? n.a.createElement(
                            "div",
                            { className: "listingdetail__display" },
                            n.a.createElement("img", {
                              className: "listingdetail__display__image",
                              src: c.photo_5,
                              alt: "",
                            })
                          )
                        : null
                    ),
                    n.a.createElement(
                      "div",
                      { className: "col-1-of-3" },
                      c.photo_6
                        ? n.a.createElement(
                            "div",
                            { className: "listingdetail__display" },
                            n.a.createElement("img", {
                              className: "listingdetail__display__image",
                              src: c.photo_6,
                              alt: "",
                            })
                          )
                        : null
                    )
                  )
                ),
                e.push(
                  n.a.createElement(
                    "div",
                    { key: 3, className: "row" },
                    n.a.createElement(
                      "div",
                      { className: "col-1-of-3" },
                      c.photo_7
                        ? n.a.createElement(
                            "div",
                            { className: "listingdetail__display" },
                            n.a.createElement("img", {
                              className: "listingdetail__display__image",
                              src: c.photo_7,
                              alt: "",
                            })
                          )
                        : null
                    ),
                    n.a.createElement(
                      "div",
                      { className: "col-1-of-3" },
                      c.photo_8
                        ? n.a.createElement(
                            "div",
                            { className: "listingdetail__display" },
                            n.a.createElement("img", {
                              className: "listingdetail__display__image",
                              src: c.photo_8,
                              alt: "",
                            })
                          )
                        : null
                    ),
                    n.a.createElement(
                      "div",
                      { className: "col-1-of-3" },
                      c.photo_9
                        ? n.a.createElement(
                            "div",
                            { className: "listingdetail__display" },
                            n.a.createElement("img", {
                              className: "listingdetail__display__image",
                              src: c.photo_9,
                              alt: "",
                            })
                          )
                        : null
                    )
                  )
                ),
                e.push(
                  n.a.createElement(
                    "div",
                    { key: 4, className: "row" },
                    n.a.createElement(
                      "div",
                      { className: "col-1-of-3" },
                      c.photo_10
                        ? n.a.createElement(
                            "div",
                            { className: "listingdetail__display" },
                            n.a.createElement("img", {
                              className: "listingdetail__display__image",
                              src: c.photo_10,
                              alt: "",
                            })
                          )
                        : null
                    ),
                    n.a.createElement(
                      "div",
                      { className: "col-1-of-3" },
                      c.photo_11
                        ? n.a.createElement(
                            "div",
                            { className: "listingdetail__display" },
                            n.a.createElement("img", {
                              className: "listingdetail__display__image",
                              src: c.photo_11,
                              alt: "",
                            })
                          )
                        : null
                    ),
                    n.a.createElement(
                      "div",
                      { className: "col-1-of-3" },
                      c.photo_12
                        ? n.a.createElement(
                            "div",
                            { className: "listingdetail__display" },
                            n.a.createElement("img", {
                              className: "listingdetail__display__image",
                              src: c.photo_12,
                              alt: "",
                            })
                          )
                        : null
                    )
                  )
                ),
                e.push(
                  n.a.createElement(
                    "div",
                    { key: 5, className: "row" },
                    n.a.createElement(
                      "div",
                      { className: "col-1-of-3" },
                      c.photo_13
                        ? n.a.createElement(
                            "div",
                            { className: "listingdetail__display" },
                            n.a.createElement("img", {
                              className: "listingdetail__display__image",
                              src: c.photo_13,
                              alt: "",
                            })
                          )
                        : null
                    ),
                    n.a.createElement(
                      "div",
                      { className: "col-1-of-3" },
                      c.photo_14
                        ? n.a.createElement(
                            "div",
                            { className: "listingdetail__display" },
                            n.a.createElement("img", {
                              className: "listingdetail__display__image",
                              src: c.photo_14,
                              alt: "",
                            })
                          )
                        : null
                    ),
                    n.a.createElement(
                      "div",
                      { className: "col-1-of-3" },
                      c.photo_15
                        ? n.a.createElement(
                            "div",
                            { className: "listingdetail__display" },
                            n.a.createElement("img", {
                              className: "listingdetail__display__image",
                              src: c.photo_15,
                              alt: "",
                            })
                          )
                        : null
                    )
                  )
                ),
                e.push(
                  n.a.createElement(
                    "div",
                    { key: 6, className: "row" },
                    n.a.createElement(
                      "div",
                      { className: "col-1-of-3" },
                      c.photo_16
                        ? n.a.createElement(
                            "div",
                            { className: "listingdetail__display" },
                            n.a.createElement("img", {
                              className: "listingdetail__display__image",
                              src: c.photo_16,
                              alt: "",
                            })
                          )
                        : null
                    ),
                    n.a.createElement(
                      "div",
                      { className: "col-1-of-3" },
                      c.photo_17
                        ? n.a.createElement(
                            "div",
                            { className: "listingdetail__display" },
                            n.a.createElement("img", {
                              className: "listingdetail__display__image",
                              src: c.photo_17,
                              alt: "",
                            })
                          )
                        : null
                    ),
                    n.a.createElement(
                      "div",
                      { className: "col-1-of-3" },
                      c.photo_18
                        ? n.a.createElement(
                            "div",
                            { className: "listingdetail__display" },
                            n.a.createElement("img", {
                              className: "listingdetail__display__image",
                              src: c.photo_18,
                              alt: "",
                            })
                          )
                        : null
                    )
                  )
                ),
                e.push(
                  n.a.createElement(
                    "div",
                    { key: 7, className: "row" },
                    n.a.createElement(
                      "div",
                      { className: "col-1-of-3" },
                      c.photo_19
                        ? n.a.createElement(
                            "div",
                            { className: "listingdetail__display" },
                            n.a.createElement("img", {
                              className: "listingdetail__display__image",
                              src: c.photo_19,
                              alt: "",
                            })
                          )
                        : null
                    ),
                    n.a.createElement(
                      "div",
                      { className: "col-1-of-3" },
                      c.photo_20
                        ? n.a.createElement(
                            "div",
                            { className: "listingdetail__display" },
                            n.a.createElement("img", {
                              className: "listingdetail__display__image",
                              src: c.photo_20,
                              alt: "",
                            })
                          )
                        : null
                    ),
                    n.a.createElement("div", { className: "col-1-of-3" })
                  )
                ),
                e
              );
            })()
          );
        },
        R = function (e, a) {
          return (function () {
            var t = Object(S.a)(
              w.a.mark(function t(l) {
                var n, c, s;
                return w.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (n = {
                              headers: { "Content-Type": "application/json" },
                            }),
                            (c = JSON.stringify({ email: e, password: a })),
                            (t.prev = 2),
                            (t.next = 5),
                            d.a.post(
                              "http://rishabkoul.pythonanywhere.com/api/token/",
                              c,
                              n
                            )
                          );
                        case 5:
                          (s = t.sent),
                            l({ type: "LOGIN_SUCCESS", payload: s.data }),
                            l(q("Authenticated successfully", "success")),
                            (t.next = 14);
                          break;
                        case 10:
                          (t.prev = 10),
                            (t.t0 = t.catch(2)),
                            l({ type: "LOGIN_FAIL" }),
                            l(q("Error Authenticating", "error"));
                        case 14:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[2, 10]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        I = Object(A.b)(
          function (e) {
            return { isAuthenticated: e.auth.isAuthenticated };
          },
          { login: R }
        )(function (e) {
          var a = e.login,
            t = e.isAuthenticated,
            c = Object(l.useState)({ email: "", password: "" }),
            s = Object(o.a)(c, 2),
            p = s[0],
            d = s[1],
            E = p.email,
            g = p.password,
            h = function (e) {
              return d(
                Object(_.a)(
                  Object(_.a)({}, p),
                  {},
                  Object(u.a)({}, e.target.name, e.target.value)
                )
              );
            };
          return t
            ? n.a.createElement(r.a, { to: "/" })
            : n.a.createElement(
                "div",
                { className: "auth" },
                n.a.createElement(
                  m.a,
                  null,
                  n.a.createElement("title", null, "Real Estate - Login"),
                  n.a.createElement("meta", {
                    name: "description",
                    content: "login page",
                  })
                ),
                n.a.createElement(
                  "h1",
                  { className: "auth__title" },
                  "Sign In"
                ),
                n.a.createElement(
                  "p",
                  { className: "auth__lead" },
                  "Sign into your Account"
                ),
                n.a.createElement(
                  "form",
                  {
                    className: "auth__form",
                    onSubmit: function (e) {
                      return (function (e) {
                        e.preventDefault(), a(E, g);
                      })(e);
                    },
                  },
                  n.a.createElement(
                    "div",
                    { className: "auth__form__group" },
                    n.a.createElement("input", {
                      className: "auth__form__input",
                      type: "email",
                      placeholder: "Email",
                      name: "email",
                      value: E,
                      onChange: function (e) {
                        return h(e);
                      },
                      required: !0,
                    })
                  ),
                  n.a.createElement(
                    "div",
                    { className: "auth__form__group" },
                    n.a.createElement("input", {
                      className: "auth__form__input",
                      type: "password",
                      placeholder: "Password",
                      name: "password",
                      value: g,
                      onChange: function (e) {
                        return h(e);
                      },
                      minLength: "6",
                    })
                  ),
                  n.a.createElement(
                    "button",
                    { className: "auth__form__button" },
                    "Login"
                  )
                ),
                n.a.createElement(
                  "p",
                  { className: "auth__authtext" },
                  "Don't have an account?",
                  n.a.createElement(
                    i.b,
                    { className: "auth__authtext__link", to: "/signup" },
                    "Sign Up"
                  )
                )
              );
        }),
        U = Object(A.b)(
          function (e) {
            return { isAuthenticated: e.auth.isAuthenticated };
          },
          {
            setAlert: q,
            signup: function (e, a, t, l) {
              return (function () {
                var n = Object(S.a)(
                  w.a.mark(function n(c) {
                    var s, i, r;
                    return w.a.wrap(
                      function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              return (
                                (s = {
                                  headers: {
                                    "Content-Type": "application/json",
                                  },
                                }),
                                (i = JSON.stringify({
                                  name: e,
                                  email: a,
                                  password: t,
                                  password2: l,
                                })),
                                (n.prev = 2),
                                (n.next = 5),
                                d.a.post(
                                  "http://rishabkoul.pythonanywhere.com/api/accounts/signup/",
                                  i,
                                  s
                                )
                              );
                            case 5:
                              (r = n.sent),
                                c({ type: "SIGNUP_SUCCESS", payload: r.data }),
                                c(R(a, t)),
                                (n.next = 14);
                              break;
                            case 10:
                              (n.prev = 10),
                                (n.t0 = n.catch(2)),
                                c({ type: "SIGNUP_FAIL" }),
                                c(q("Error Authenticating", "error"));
                            case 14:
                            case "end":
                              return n.stop();
                          }
                      },
                      n,
                      null,
                      [[2, 10]]
                    );
                  })
                );
                return function (e) {
                  return n.apply(this, arguments);
                };
              })();
            },
          }
        )(function (e) {
          var a = e.setAlert,
            t = e.signup,
            c = e.isAuthenticated,
            s = Object(l.useState)({
              name: "",
              email: "",
              password: "",
              password2: "",
            }),
            p = Object(o.a)(s, 2),
            d = p[0],
            E = p[1],
            g = d.name,
            h = d.email,
            f = d.password,
            N = d.password2,
            v = function (e) {
              return E(
                Object(_.a)(
                  Object(_.a)({}, d),
                  {},
                  Object(u.a)({}, e.target.name, e.target.value)
                )
              );
            };
          return c
            ? n.a.createElement(r.a, { to: "/" })
            : n.a.createElement(
                "div",
                { className: "auth" },
                n.a.createElement(
                  m.a,
                  null,
                  n.a.createElement("title", null, "Real Estate - Sign Up"),
                  n.a.createElement("meta", {
                    name: "description",
                    content: "sign up page",
                  })
                ),
                n.a.createElement(
                  "h1",
                  { className: "auth__title" },
                  "Sign Up"
                ),
                n.a.createElement(
                  "p",
                  { className: "auth__lead" },
                  "Create your Account"
                ),
                n.a.createElement(
                  "form",
                  {
                    className: "auth__form",
                    onSubmit: function (e) {
                      return (function (e) {
                        e.preventDefault(),
                          f !== N
                            ? a("Password do not match", "error")
                            : t(g, h, f, N);
                      })(e);
                    },
                  },
                  n.a.createElement(
                    "div",
                    { className: "auth__form__group" },
                    n.a.createElement("input", {
                      className: "auth__form__input",
                      type: "text",
                      placeholder: "Name",
                      name: "name",
                      value: g,
                      onChange: function (e) {
                        return v(e);
                      },
                      required: !0,
                    })
                  ),
                  n.a.createElement(
                    "div",
                    { className: "auth__form__group" },
                    n.a.createElement("input", {
                      className: "auth__form__input",
                      type: "email",
                      placeholder: "Email",
                      name: "email",
                      value: h,
                      onChange: function (e) {
                        return v(e);
                      },
                      required: !0,
                    })
                  ),
                  n.a.createElement(
                    "div",
                    { className: "auth__form__group" },
                    n.a.createElement("input", {
                      className: "auth__form__input",
                      type: "password",
                      placeholder: "Password",
                      name: "password",
                      value: f,
                      onChange: function (e) {
                        return v(e);
                      },
                      minLength: "6",
                    })
                  ),
                  n.a.createElement(
                    "div",
                    { className: "auth__form__group" },
                    n.a.createElement("input", {
                      className: "auth__form__input",
                      type: "password",
                      placeholder: "Confirm Password",
                      name: "password2",
                      value: N,
                      onChange: function (e) {
                        return v(e);
                      },
                      minLength: "6",
                    })
                  ),
                  n.a.createElement(
                    "button",
                    { className: "auth__form__button" },
                    "Register"
                  )
                ),
                n.a.createElement(
                  "p",
                  { className: "auth__authtext" },
                  "Already have an account?",
                  n.a.createElement(
                    i.b,
                    { className: "auth__authtext__link", to: "/login" },
                    "Sign In"
                  )
                )
              );
        }),
        B = Object(A.b)(function (e) {
          return { alerts: e.alert };
        })(function (e) {
          var a = e.alerts;
          return (
            null != a &&
            a.length > 0 &&
            a.map(function (e) {
              return n.a.createElement(
                "div",
                { key: e.id, className: "alert alert--".concat(e.alertType) },
                e.msg
              );
            })
          );
        }),
        H = Object(A.b)(
          function (e) {
            return { auth: e.auth };
          },
          {
            logout: function () {
              return function (e) {
                e(q("logout successful", "success")), e({ type: "LOGOUT" });
              };
            },
          }
        )(function (e) {
          var a = e.auth,
            t = a.isAuthenticated,
            c = a.loading,
            s = e.logout,
            r = n.a.createElement(
              "a",
              { className: "navbar__top__auth__link", onClick: s, href: "#!" },
              "Logout"
            ),
            o = n.a.createElement(
              l.Fragment,
              null,
              n.a.createElement(
                i.b,
                { className: "navbar__top__auth__link", to: "/login" },
                "Login"
              ),
              n.a.createElement(
                i.b,
                { className: "navbar__top__auth__link", to: "/signup" },
                "Sign Up"
              )
            );
          return n.a.createElement(
            l.Fragment,
            null,
            n.a.createElement(
              "nav",
              { className: "navbar" },
              n.a.createElement(
                "div",
                { className: "navbar__top" },
                n.a.createElement(
                  "div",
                  { className: "navbar__top__logo" },
                  n.a.createElement(
                    i.b,
                    { className: "navbar__top__logo__link", to: "/" },
                    "Real Estate"
                  )
                ),
                n.a.createElement(
                  "div",
                  { className: "navbar__top__auth" },
                  !c && n.a.createElement(l.Fragment, null, t ? r : o)
                )
              ),
              n.a.createElement(
                "div",
                { className: "navbar__bottom" },
                n.a.createElement(
                  "li",
                  { className: "navbar__bottom__item" },
                  n.a.createElement(
                    i.c,
                    {
                      className: "navbar__bottom__item__link",
                      exact: !0,
                      to: "/",
                    },
                    "Home"
                  )
                ),
                n.a.createElement(
                  "li",
                  { className: "navbar__bottom__item" },
                  n.a.createElement(
                    i.c,
                    {
                      className: "navbar__bottom__item__link",
                      exact: !0,
                      to: "/listings",
                    },
                    "Listings"
                  )
                ),
                n.a.createElement(
                  "li",
                  { className: "navbar__bottom__item" },
                  n.a.createElement(
                    i.c,
                    {
                      className: "navbar__bottom__item__link",
                      exact: !0,
                      to: "/about",
                    },
                    "About"
                  )
                ),
                n.a.createElement(
                  "li",
                  { className: "navbar__bottom__item" },
                  n.a.createElement(
                    i.c,
                    {
                      className: "navbar__bottom__item__link",
                      exact: !0,
                      to: "/contact",
                    },
                    "Contact"
                  )
                )
              )
            ),
            n.a.createElement(B, null)
          );
        }),
        M = function (e) {
          return n.a.createElement(
            "div",
            null,
            n.a.createElement(H, null),
            e.children
          );
        },
        G = function () {
          return n.a.createElement(
            "div",
            { className: "notfound" },
            n.a.createElement(
              "h1",
              { className: "notfound__heading" },
              "404 Not Found"
            ),
            n.a.createElement(
              "p",
              { className: "notfound__paragraph" },
              "The link you requested does not exist on our website."
            )
          );
        },
        D = t(46),
        z = Object(A.b)(function (e) {
          return { auth: e.auth };
        })(function (e) {
          var a = e.component,
            t = e.auth,
            l = t.isAuthenticated,
            c = t.loading,
            s = Object(D.a)(e, ["component", "auth"]);
          return n.a.createElement(
            r.b,
            Object.assign({}, s, {
              render: function (e) {
                return l || c
                  ? n.a.createElement(a, e)
                  : n.a.createElement(r.a, { to: "/login/" });
              },
            })
          );
        }),
        J = t(17),
        W = t(43),
        V = t(44),
        Q = t(45),
        K = [],
        Z = {
          token: localStorage.getItem("token"),
          isAuthenticated: null,
          loading: !1,
        },
        $ = Object(J.combineReducers)({
          alert: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : K,
              a = arguments.length > 1 ? arguments[1] : void 0,
              t = a.type,
              l = a.payload;
            switch (t) {
              case "SET_ALERT":
                return [].concat(Object(Q.a)(e), [l]);
              case "REMOVE_ALERT":
                return e.filter(function (e) {
                  return e.id !== l;
                });
              default:
                return e;
            }
          },
          auth: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : Z,
              a = arguments.length > 1 ? arguments[1] : void 0,
              t = a.type,
              l = a.payload;
            switch (t) {
              case "LOGIN_SUCCESS":
                return (
                  localStorage.setItem("token", l.access),
                  Object(_.a)(
                    Object(_.a)({}, e),
                    {},
                    { isAuthenticated: !0, loading: !1, token: l.access }
                  )
                );
              case "SIGNUP_SUCCESS":
                return Object(_.a)(
                  Object(_.a)({}, e),
                  {},
                  { isAuthenticated: !1, loading: !0 }
                );
              case "SIGNUP_FAIL":
              case "LOGIN_FAIL":
              case "LOGOUT":
                return (
                  localStorage.removeItem("token"),
                  Object(_.a)(
                    Object(_.a)({}, e),
                    {},
                    { token: null, isAuthenticated: !1, loading: !1 }
                  )
                );
              default:
                return e;
            }
          },
        }),
        X = [V.a],
        Y = Object(J.createStore)(
          $,
          {},
          Object(W.composeWithDevTools)(J.applyMiddleware.apply(void 0, X))
        ),
        ee =
          (t(94),
          function () {
            return n.a.createElement(
              A.a,
              { store: Y },
              n.a.createElement(
                i.a,
                null,
                n.a.createElement(
                  M,
                  null,
                  n.a.createElement(
                    r.d,
                    null,
                    n.a.createElement(r.b, {
                      exact: !0,
                      path: "/",
                      component: O,
                    }),
                    n.a.createElement(r.b, {
                      exact: !0,
                      path: "/about",
                      component: C,
                    }),
                    n.a.createElement(r.b, {
                      exact: !0,
                      path: "/contact",
                      component: T,
                    }),
                    n.a.createElement(r.b, {
                      exact: !0,
                      path: "/listings",
                      component: F,
                    }),
                    n.a.createElement(z, {
                      exact: !0,
                      path: "/listings/:id",
                      component: P,
                    }),
                    n.a.createElement(r.b, {
                      exact: !0,
                      path: "/login",
                      component: I,
                    }),
                    n.a.createElement(r.b, {
                      exact: !0,
                      path: "/signup",
                      component: U,
                    }),
                    n.a.createElement(r.b, { component: G })
                  )
                )
              )
            );
          });
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      s.a.render(
        n.a.createElement(n.a.StrictMode, null, n.a.createElement(ee, null)),
        document.getElementById("root")
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready
            .then(function (e) {
              e.unregister();
            })
            .catch(function (e) {
              console.error(e.message);
            });
    },
  },
  [[47, 1, 2]],
]);
//# sourceMappingURL=main.9eaebea3.chunk.js.map
