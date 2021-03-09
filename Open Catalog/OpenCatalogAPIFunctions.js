// Get Categories
// Will be used also for search categories
// where clause is used for UUID and search string etc.
var categories = openCatalog.getCategories(where_clause, fields);
categories = [
  {
    path: "Chemicals/Lubricants", // readOnly
    UUID: "123456",
    description: "lorem ipsum something",
    name: "Screw Driver 20v",
    title: "Lubricants",
    images: [
      // scalable
      { type: "small", path: "/path/to/small/image.jpg" },
      { type: "large", path: "/path/to/big/image.jpg" },
    ],
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
  title: "Lubricants",
  images: [
    { type: "small", path: "/path/to/small/image.jpg" },
    { type: "large", path: "/path/to/big/image.jpg" },
  ],
  sortIndex: 0,
  parentUUID: "",
};

// Get Category Path
// Needed for Breadcrumbs
var categoryPath = openCatalog.getCategoryPath(categoryUUID);
categoryPath = [
  {
    path: "Chemicals",
    UUID: "1111",
    description: "lorem ipsum something",
    name: "Chemicals",
    title: "Chemicals",
    images: [
      { type: "small", path: "/path/to/small/image.jpg" },
      { type: "large", path: "/path/to/big/image.jpg" },
    ],
    sortIndex: 0,
    parentUUID: "",
  },
  {
    path: "Chemicals/Lubricants",
    UUID: "2222",
    description: "lorem ipsum something",
    name: "Lubricants",
    title: "Lubricants",
    images: [
      { type: "small", path: "/path/to/small/image.jpg" },
      { type: "large", path: "/path/to/big/image.jpg" },
    ],
    sortIndex: 0,
    parentUUID: "1111",
  },
  {
    path: "Chemicals/Lubricants/Wipes",
    UUID: "3333",
    description: "lorem ipsum something",
    name: "Wipes",
    title: "Wipes",
    images: [
      { type: "small", path: "/path/to/small/image.jpg" },
      { type: "large", path: "/path/to/big/image.jpg" },
    ],
    sortIndex: 0,
    parentUUID: "2222",
  },
];

// Get Categoy Tree
// Needed for build of UI tree
var categoryTree = openCatalog.getCategoryTree(categoryUUID, depth);
categoryTree = [
  {
    path: "Chemicals",
    UUID: "123456",
    description: "lorem ipsum something",
    name: "Screw Driver 20v",
    title: "Wipes",
    images: [
      { type: "small", path: "/path/to/small/image.jpg" },
      { type: "large", path: "/path/to/big/image.jpg" },
    ],
    sortIndex: 0,
    parentUUID: "",
    subCategories: [
      {
        path: "Chemicals/Lubricants",
        UUID: "1234567",
        description: "lorem ipsum something",
        name: "Lubricants",
        title: "Lubricants",
        images: [
          { type: "small", path: "/path/to/small/image.jpg" },
          { type: "large", path: "/path/to/big/image.jpg" },
        ],
        sortIndex: 0,
        parentUUID: "123456",
      },
      {
        path: "Chemicals/Hand Care",
        UUID: "1234568",
        description: "lorem ipsum something",
        name: "Hand Care",
        title: "Hand Care",
        images: [
          { type: "small", path: "/path/to/small/image.jpg" },
          { type: "large", path: "/path/to/big/image.jpg" },
        ],
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
    title: "Abrasives",
    images: [
      { type: "small", path: "/path/to/small/image.jpg" },
      { type: "large", path: "/path/to/big/image.jpg" },
    ],
    sortIndex: 0,
    parentUUID: "",
    subCategories: [
      {
        path: "Abrasives/Brushes",
        UUID: "3216549879",
        description: "lorem ipsum something",
        name: "Brushes",
        title: "Brushes",
        images: [
          { type: "small", path: "/path/to/small/image.jpg" },
          { type: "large", path: "/path/to/big/image.jpg" },
        ],
        sortIndex: 0,
        parentUUID: "321654",
      },
      {
        path: "Abrasives/Coated",
        UUID: "321654365",
        description: "lorem ipsum something",
        name: "Coated Abrasives",
        title: "Coated Abrasives",
        images: [
          { type: "small", path: "/path/to/small/image.jpg" },
          { type: "large", path: "/path/to/big/image.jpg" },
        ],
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
  where_clause, //
  page,
  pageSize,
  sortBy,
  fields
  // dimension group by - use for variations
);
items = {
  // pagination & sorting
  pagination: {
    page: 1,
    pageSize: 25,
    totalItemCount: 100,
    numberOfPages: 4,
  },
  sorting: {
    sortOptions: [
      // configured in the Open Catalog exporter
      {
        displayName: "Product: A to Z",
        sortID: "1",
        //sortExpression: ".........", // to be able to view the expression of the sort: fields, asc/desc etc.
      },
      {
        displayName: "Product: Z to A",
        sortID: "2",
        //sortExpression: ".........",
      },
      {
        displayName: "Price: Low to High",
        sortID: "3",
        //sortExpression: ".........",
      },
      {
        displayName: "Price: High to Low",
        sortID: "4",
        //sortExpression: ".........",
      },
    ],
    selectedSortID: "1",
  },
  products: [
    {
      externalID: "891.7265",
      UUID: "987654",
      description: "King Pin Fifth Wheel Lube - 15.5 oz",
      name: "891.7265",
      dimension1: { code: "", name: "", sortIndex: "" },
      dimension2: { code: "", name: "", sortIndex: "", groupID: "" },
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
        { apiName: "Brand", type: "String", title: "Brand", value: "Winzer" },
        { apiName: "Type", type: "String", title: "Type", value: "Greases" },
        {
          apiName: "ContainerSize",
          type: "String",
          title: "Container Size",
          value: "14 oz",
        },
        { apiName: "Price", type: "Decimal", title: "Price", value: 12.88 },
      ],
      variations: [
        {
          externalID: "891.7265.1",
          UUID: "987654",
          description: "King Pin Fifth Wheel Lube - 20 oz",
          name: "891.7265.1",
          dimension1: { code: "", name: "", sortIndex: "" },
          dimension2: { code: "", name: "", sortIndex: "", groupID: "" },
          images: [
            {
              small: "/path/to/small/image.jpg",
              large: "/path/to/big/image.jpg",
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
      type: "string", // number/price/date
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
    {
      apiName: "attr1",
      type: "String",
      title: "Attribute 1",
      value: "value 1 value 1 value 1 value 1",
    },
    {
      apiName: "attr2",
      type: "String",
      title: "Attribute 2",
      value: "value 2 value 2 value 2 value 2",
    },
    {
      apiName: "specification",
      type: "String",
      title: "Specification",
      value: "<html>.......</html>",
    },
    {
      apiName: "features",
      type: "rich text / string",
      title: "Features",
      value: "<html>................</html>",
    },
    {
      apiName: "file0", // Add type? to be able to differ b/w fields: show all files under one tab in the info
      type: "attachment",
      title: "Safety Manual",
      value: "the/path/to/the/file.pdf",
    },
  ],
  variations: [],
};
