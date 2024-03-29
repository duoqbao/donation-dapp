export const IDL = {
  version: "0.1.0",
  name: "hello_anchor",
  constants: [
    {
      name: "CREATOR_TAG",
      type: "bytes",
      value: "[67, 82, 69, 65, 84, 79, 82, 95, 83, 84, 65, 84, 69]"
    },
    {
      name: "DONATION_TAG",
      type: "bytes",
      value: "[68, 79, 78, 65, 84, 73, 79, 78, 95, 83, 84, 65, 84, 69]"
    },
    {
      name: "CREATOR_DELETE",
      type: "bytes",
      value: "[67, 82, 69, 65, 84, 79, 82, 95, 82, 69, 77, 79, 86, 69]"
    }
  ],
  instructions: [
    {
      name: "initializeCreator",
      accounts: [
        {
          name: "authority",
          isMut: true,
          isSigner: true
        },
        {
          name: "creatorProfile",
          isMut: true,
          isSigner: false
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false
        }
      ],
      args: [
        {
          name: "name",
          type: "string"
        },
        {
          name: "field",
          type: "string"
        }
      ]
    },
    {
      name: "transferDonation",
      accounts: [
        {
          name: "authority",
          isMut: true,
          isSigner: true
        },
        {
          name: "creatorProfile",
          isMut: true,
          isSigner: false
        },
        {
          name: "donation",
          isMut: true,
          isSigner: false
        },
        {
          name: "from",
          isMut: true,
          isSigner: true
        },
        {
          name: "to",
          isMut: true,
          isSigner: true
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false
        }
      ],
      args: [
        {
          name: "content",
          type: "string"
        },
        {
          name: "title",
          type: "string"
        },
        {
          name: "amount",
          type: "u64"
        }
      ]
    },
    {
      name: "removeCreator",
      accounts: [
        {
          name: "authority",
          isMut: true,
          isSigner: true
        },
        {
          name: "creatorAccount",
          isMut: true,
          isSigner: false
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false
        }
      ],
      args: []
    }
  ],
  accounts: [
    {
      name: "CreatorProfile",
      type: {
        kind: "struct",
        fields: [
          {
            name: "authority",
            type: "publicKey"
          },
          {
            name: "name",
            type: "string"
          },
          {
            name: "field",
            type: "string"
          },
          {
            name: "wallet",
            type: "publicKey"
          },
          {
            name: "donated",
            type: "u64"
          }
        ]
      }
    },
    {
      name: "Donation",
      type: {
        kind: "struct",
        fields: [
          {
            name: "content",
            type: "string"
          },
          {
            name: "title",
            type: "string"
          },
          {
            name: "amount",
            type: "u64"
          },
          {
            name: "fee",
            type: "u64"
          },
          {
            name: "to",
            type: "publicKey"
          }
        ]
      }
    }
  ],
  errors: [
    {
      code: 6000,
      name: "Unauthorized",
      msg: "You'r not authorized to perform this action"
    },
    {
      code: 6001,
      name: "NotAllowed",
      msg: "Not allowed"
    },
    {
      code: 6002,
      name: "MathOverflow",
      msg: "Math operation overflow"
    },
    {
      code: 6003,
      name: "AlreadyMarked",
      msg: "Already marked"
    }
  ]
}