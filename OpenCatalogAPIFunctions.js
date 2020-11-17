// Get Categories
// Will be used also for search categories
// where clause is used for UUID and search string etc.
var categories = openCatalog.getCategories(where_clause, sortBy, fields);
categories = [
  {
    path: "Chemicals/Lubricants",
    UUID: "123456",
    description: "lorem ipsum something",
    name: "Screw Driver 20v",
    image: {
      small: "/path/to/small/image.jpg",
      large: "/path/to/big/image.jpg",
    },
    sortIndex: 0,
    parentUUID: "1234",
  },
];

// Get Category
// A simplyfied way to interact with a all related to a category object
var category = openCatalog.getCategory(categoryUUID);
category = {
  path: "Chemicals",
  UUID: "123456",
  description: "lorem ipsum something",
  name: "Screw Driver 20v",
  image: {
    small: "/path/to/small/image.jpg",
    large: "/path/to/big/image.jpg",
  },
  sortIndex: 0,
  parentUUID: "",
  subCategories: [
    {
      path: "Chemicals/Lubricants",
      UUID: "1234567",
      description: "lorem ipsum something",
      name: "Lubricants",
      image: {
        small: "/path/to/small/image.jpg",
        large: "/path/to/big/image.jpg",
      },
      sortIndex: 0,
      parentUUID: "123456",
    },
    {
      path: "Chemicals/Hand Care",
      UUID: "1234568",
      description: "lorem ipsum something",
      name: "Hand Care",
      image: {
        small: "/path/to/small/image.jpg",
        large: "/path/to/big/image.jpg",
      },
      sortIndex: 0,
      parentUUID: "123456",
    },
  ],
};

// Get Category Path
// Needed for Breadcrumbs
var categoryPath = openCatalog.getCategoryPath(categoryID);
categoryPath = [
  {
    path: "Chemicals",
    UUID: "1111",
    description: "lorem ipsum something",
    name: "All",
    image: {
      small: "/path/to/small/image.jpg",
      large: "/path/to/big/image.jpg",
    },
    sortIndex: 0,
    parentUUID: "",
  },
  {
    path: "Chemicals/Lubricants",
    UUID: "2222",
    description: "lorem ipsum something",
    name: "Chemicals",
    image: {
      small: "/path/to/small/image.jpg",
      large: "/path/to/big/image.jpg",
    },
    sortIndex: 0,
    parentUUID: "1111",
  },
  {
    path: "Chemicals/Lubricants/Wipes",
    UUID: "3333",
    description: "lorem ipsum something",
    name: "Hand Care",
    image: {
      small: "/path/to/small/image.jpg",
      large: "/path/to/big/image.jpg",
    },
    sortIndex: 0,
    parentUUID: "2222",
  },
];

// Get Categoy Tree
// Needed for build of UI tree
var categoryTree = openCatalog.getCategoryTree();
categoryTree = [
  {
    path: "Chemicals",
    UUID: "123456",
    description: "lorem ipsum something",
    name: "Screw Driver 20v",
    image: {
      small: "/path/to/small/image.jpg",
      large: "/path/to/big/image.jpg",
    },
    sortIndex: 0,
    parentUUID: "",
    subCategories: [
      {
        path: "Chemicals/Lubricants",
        UUID: "1234567",
        description: "lorem ipsum something",
        name: "Lubricants",
        image: {
          small: "/path/to/small/image.jpg",
          large: "/path/to/big/image.jpg",
        },
        sortIndex: 0,
        parentUUID: "123456",
      },
      {
        path: "Chemicals/Hand Care",
        UUID: "1234568",
        description: "lorem ipsum something",
        name: "Hand Care",
        image: {
          small: "/path/to/small/image.jpg",
          large: "/path/to/big/image.jpg",
        },
        sortIndex: 0,
        parentUUID: "123456",
      },
    ],
  },
  {
    path: "Abrasives",
    UUID: "321654",
    description: "lorem ipsum something",
    name: "Abrasives",
    image: {
      small: "/path/to/small/image.jpg",
      large: "/path/to/big/image.jpg",
    },
    sortIndex: 0,
    parentUUID: "",
    subCategories: [
      {
        path: "Abrasives/Brushes",
        UUID: "3216549879",
        description: "lorem ipsum something",
        name: "Brushes",
        image: {
          small: "/path/to/small/image.jpg",
          large: "/path/to/big/image.jpg",
        },
        sortIndex: 0,
        parentUUID: "321654",
      },
      {
        path: "Abrasives/Coated",
        UUID: "321654365",
        description: "lorem ipsum something",
        name: "Coated Abrasives",
        image: {
          small: "/path/to/small/image.jpg",
          large: "/path/to/big/image.jpg",
        },
        sortIndex: 0,
        parentUUID: "321654",
      },
    ],
  },
];

// Get Items By Category
var items = openCatalog.getItems(
  categoryUUID,
  filters,
  search_string,
  page,
  pageSize,
  sortBy,
  fields
);
items = {
  // pagination & sorting
  pagination: {
    page: 1,
    pageSize: 25,
    totalItemCount: 100,
    numberOfPages: 4,
    sortOptions: [
      {
        displayName: "Best Match",
        sortType: "1",
      },
      {
        displayName: "Product: A to Z",
        sortType: "2",
      },
      {
        displayName: "Product: Z to A",
        sortType: "3",
      },
    ],
    sortType: "1",
    nextPageUri:
      "https://www.winzer.com/api/v1/products?page=2&categoryId=47dcebdf-2f1c-45fa-bf7e-a7f60134ed8d&sort=1&expand=pricing%2Cattributes%2Cfacets%2Cbrand",
    prevPageUri: null,
  },
  products: [
    {
      externalID: "891.7265",
      UUID: "987654",
      description: "King Pin Fifth Wheel Lube - 15.5 oz",
      name: "891.7265",
      images: [
        {
          small: "/path/to/small/image.jpg",
          large: "/path/to/big/image.jpg",
        },
      ],
      categories: [
        {
          path: "Chemicals/Lubricants/Greases",
          UUID: "123456",
          description: "lorem ipsum something",
          name: "Screw Driver 20v",
          image: {
            small: "/path/to/small/image.jpg",
            large: "/path/to/big/image.jpg",
          },
          sortIndex: 0,
          parentUUID: "",
        },
      ],
      attributes: [
        // unlimited # of attributes
        { apiName: "Brand", title: "Brand", value: "Winzer" },
        { apiName: "Type", title: "Type", value: "Greases" },
        { apiName: "ContainerSize", title: "Container Size", value: "14 oz" },
      ],
      variations: [
        {
          externalID: "891.7265.1",
          UUID: "987654",
          description: "King Pin Fifth Wheel Lube - 20 oz",
          name: "891.7265.1",
          images: [
            {
              small: "/path/to/small/image.jpg",
              large: "/path/to/big/image.jpg",
            },
          ],
          categories: [
            {
              path: "Chemicals/Lubricants/Greases",
              UUID: "123456",
              description: "lorem ipsum something",
              name: "Screw Driver 20v",
              image: {
                small: "/path/to/small/image.jpg",
                large: "/path/to/big/image.jpg",
              },
              sortIndex: 0,
              parentUUID: "",
            },
          ],
          attributes: [
            // unlimited # of attributes
            { apiName: "Brand", title: "Brand", value: "Winzer" },
            { apiName: "Type", title: "Type", value: "Greases" },
            {
              apiName: "ContainerSize",
              title: "Container Size",
              value: "21 oz",
            },
          ],
        },
      ],
    },
  ],
  filters: [
    {
      apiName: "attr1",
      title: "Attribute 1",
      values: [
        {
          value: "value 1",
          count: 10,
        },
        {
          value: "value 11",
          count: 11,
        },
        {
          value: "value 111",
          count: 0,
        },
      ],
    },
    {
      apiName: "attr2",
      title: "Attribute 2",
      values: [
        {
          value: "value 2",
          count: 20,
        },
        {
          value: "value 22",
          count: 22,
        },
        {
          value: "value 2222",
          count: 0,
        },
      ],
    },
  ],
  categoryUUID: "234567898765",
  searchString: "",
};

// Get Item
var item = openCatalog.getItem(itemUUID);
item = {
  externalID: "543",
  UUID: "987654",
  description: "lorem ipsum something",
  name: "gfcvkblk",
  images: [
    {
      small: "/path/to/small/image.jpg",
      large: "/path/to/big/image.jpg",
    },
  ],
  categories: [{}, {}], // parentUUID
  attributes: [
    // unlimited # of attributes
    {
      apiName: "attr1",
      title: "Attribute 1",
      value: "value 1 value 1 value 1 value 1",
    },
    {
      apiName: "attr2",
      title: "Attribute 2",
      value: "value 2 value 2 value 2 value 2",
    },
    {
      apiName: "specification",
      title: "Specification",
      value: "<html>.......</html>",
    },
    {
      apiName: "features",
      title: "Features",
      value: "<html>................</html>",
    },
    {
      apiName: "file0",
      title: "Safety Manual",
      value: "the/path/to/the/file.pdf",
    },
  ],
  variations: [],
};
