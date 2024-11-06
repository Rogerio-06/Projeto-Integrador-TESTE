import { FaShoppingCart } from "react-icons/fa";
import QuantityButton from "@/shared/components/QuantityButton";

interface ItemCardProps {
  title: string;
  image: string;
  price: string;
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export default function ItemCard({ title, image, price, quantity, onIncrement, onDecrement }: ItemCardProps) {
  return (
    <div className="p-6 sm:p-8 bg-gray-800 shadow-lg rounded-xl w-full max-w-xs min-h-[360px] max-h-[400px] flex-shrink-0 relative">
      <div className="absolute top-4 right-4 bg-blue-500 text-white font-bold rounded-full w-20 h-20 flex items-center justify-center text-sm">
        {price}
      </div>
      <div className="flex items-center justify-center mb-6 h-24">
        <img src={image} alt={title} className="w-24 h-full object-contain rounded-lg" />
      </div>
      <h3 className="text-2xl font-semibold mb-3 text-white text-center">{title}</h3>
      <div className="flex items-center justify-center space-x-4 mt-4">
        <QuantityButton label="+" onClick={onIncrement} />
        <span className="text-xl font-bold text-white">{quantity}</span>
        <QuantityButton label="-" onClick={onDecrement} />
      </div>
      <div className="border-t border-gray-700 mt-6 pt-6">
        <div className="flex justify-center">
          <button className="p-2 bg-yellow-600 rounded-full hover:bg-yellow-700 focus:outline-none">
            <FaShoppingCart className="text-white text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
}
