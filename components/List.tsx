import React from "react";

interface Listprops<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

export const List = <T,>({ items, renderItem }: Listprops<T>) => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-4">
      {items.map((item, index) => (
        <div key={index} className="p-2">
          {renderItem(item)}
        </div>
      ))}
    </div>
  );
};
