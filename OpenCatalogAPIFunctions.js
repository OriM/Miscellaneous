// Get Categories
// Will be used also for search categories
// where clause is used for UUID and search string etc.
var categories = openCatalog.getCategories(where_clause, sortBy, fields);
categories = [
  {
    externalID: "123456",
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

// Get Category Path
// Needed for Breadcrumbs
var categoryPath = openCatalog.getCategoryPath(categoryID);
categoryPath = [
  {
    externalID: "1111",
    UUID: "1111",
    description: "lorem ipsum something",
    name: "First",
    image: {
      small: "/path/to/small/image.jpg",
      large: "/path/to/big/image.jpg",
    },
    sortIndex: 0,
    parentUUID: "",
  },
  {
    externalID: "2222",
    UUID: "2222",
    description: "lorem ipsum something",
    name: "Second",
    image: {
      small: "/path/to/small/image.jpg",
      large: "/path/to/big/image.jpg",
    },
    sortIndex: 0,
    parentUUID: "1111",
  },
  {
    externalID: "3333",
    UUID: "3333",
    description: "lorem ipsum something",
    name: "Third",
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
    category: {
      externalID: "1111",
      UUID: "1111",
      description: "lorem ipsum something",
      name: "First",
      image: {
        small: "/path/to/small/image.jpg",
        large: "/path/to/big/image.jpg",
      },
      sortIndex: 0,
      parentUUID: "",
    },
    nodes: [
      {
        category: {
          externalID: "2222",
          UUID: "2222",
          description: "lorem ipsum something",
          name: "Second",
          image: {
            small: "/path/to/small/image.jpg",
            large: "/path/to/big/image.jpg",
          },
          sortIndex: 0,
          parentUUID: "1111",
        },
        nodes: [],
      },
    ],
  },
  {},
];

// Get Items By Category
var items = openCatalog.getItems(where_clause, page, pageSize, sortBy, fields);
items = {
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
      externalID: "123456",
      UUID: "123456",
      description: "lorem ipsum something",
      name: "Screw Driver 20v",
      images: [
        {
          small: "/path/to/small/image.jpg",
          large: "/path/to/big/image.jpg",
        },
      ],
      sortIndex: 0,
      categories: [{},{}], // parentUUID
      attributes: [
        // unlimited # of attributes
        { key: "key 1", value: "value 1" },
        { key: "key 2", value: "value 2" },
      ],
      indexedAttributes: {
        // LIMITED # of attributes
        attr1: { key: "key 1", value: "value 1" },
        attr3: { key: "key 2", value: "value 1" },
        attr9: { key: "key 50", value: "value 1" },
      },
    },
    {
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
      sortIndex: 0,
      categories: [{},{}], // parentUUID
      attributes: [
        // unlimited # of attributes
        { key: "key 1", value: "value 1" },
        { key: "key 2", value: "value 2" },
      ],
      indexedAttributes: {
        // LIMITED # of attributes
        attr21: { key: "key 1", value: "value 1" },
        attr32: { key: "key 2", value: "value 1" },
        attr49: { key: "key 50", value: "value 1" },
      },
    },
  ],
};

// Get Item
var item = openCatalog.getItem(itemUUID);
item = {
  externalID: "123456",
  UUID: "123456",
  description: "lorem ipsum something",
  name: "Screw Driver 20v",
  images: [
    {
      small: "/path/to/small/image.jpg",
      large: "/path/to/big/image.jpg",
    },
  ],
  sortIndex: 0,
  categories: [{},{}], // parentUUID
  attributes: [
    // unlimited # of attributes
    { key: "key 1", value: "value 1" },
    { key: "key 2", value: "value 2" },
  ],
  indexedAttributes: {
    // LIMITED # of attributes
    attr1: { key: "key 1", value: "value 1" },
    attr3: { key: "key 2", value: "value 1" },
    attr9: { key: "key 50", value: "value 1" },
  },
  // a regular attribute
//   specification: {},
//   features: {},
//   files: {},
};

// Get Filters
// products are ALL products related to get items or search items
// this endpoint should really be a part of the mentioned response
var filters = openCatalog.getFilters(products);
filters = {
  categories: [
    {
      externalID: "123456",
      UUID: "123456",
      name: "Screw Driver 20v",
      count: 20,
    },
    {
      externalID: "98754",
      UUID: "98754",
      name: "Screw Driver 16v",
      count: 55,
    },
  ],
  attributes: [
    {
      name: "attr1",
      values: [
        {
          name: "value1",
          count: 10,
        },
        {
          name: "value11",
          count: 11,
        },
        {
          name: "value111",
          count: 111,
        },
      ],
    },
    {
      name: "attr2",
      values: [
        {
          name: "value2",
          count: 20,
        },
        {
          name: "value22",
          count: 22,
        },
        {
          name: "value2222",
          count: 222,
        },
      ],
    },
  ],
};
