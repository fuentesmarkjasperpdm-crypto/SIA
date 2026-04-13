import type { Schema, Struct } from '@strapi/strapi';

export interface InventoryStockInventory extends Struct.ComponentSchema {
  collectionName: 'components_inventory_stock_inventories';
  info: {
    displayName: 'Stock Inventory';
    icon: 'stack';
  };
  attributes: {
    BatchNumber: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 64;
        minLength: 1;
      }>;
    ExpiryDate: Schema.Attribute.Date;
    LastRestockDate: Schema.Attribute.DateTime;
    QuantityOnHand: Schema.Attribute.Integer & Schema.Attribute.Required;
    StorageLocation: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 128;
        minLength: 1;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'inventory.stock-inventory': InventoryStockInventory;
    }
  }
}
