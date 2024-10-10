import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMeals = createAsyncThunk("meal/fetchMeals", async () => {
  const response = await axios.get("http://localhost:5000/meals");
  return response.data;
});

const initialState = {
  meals: [],
  carts: [],
  TotalAmount: 0,
  statut: "idle",
  erreur: null,
};

const MealReducer = createSlice({
  name: "meal",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingMeal = state.carts.find(
        (cart) => cart.id === action.payload.id
      );

      if (existingMeal) {
        existingMeal.quantity += 1;
        existingMeal.totalPrice += action.payload.price;
      } else {
        state.carts.push({
          ...action.payload,
          quantity: 1,
          totalPrice: action.payload.price,
        });
      }

      state.TotalAmount = state.carts.reduce(
        (sum, cart) => sum + cart.totalPrice,
        0
      );
    },
    removeFromCart: (state, action) => {
      state.carts = state.carts.filter((cart) => cart.id !== action.payload.id);

      state.TotalAmount = state.carts.reduce(
        (sum, cart) => sum + cart.totalPrice,
        0
      );
    },
    incrementQuantity: (state, action) => {
      const Meal = state.carts.find((cart) => cart.id === action.payload);

      if (Meal) {
        Meal.quantity += 1;
        Meal.totalPrice += Meal.price;
      }

      state.TotalAmount = state.carts.reduce(
        (sum, cart) => sum + cart.totalPrice,
        0
      );
    },
    decrementQuantity: (state, action) => {
      const Meal = state.carts.find((cart) => cart.id === action.payload);

      if (Meal) {
        if (Meal.quantity > 1) {
          Meal.quantity -= 1;
          Meal.totalPrice -= Meal.price;
        } else {
          state.carts = state.carts.filter(
            (cart) => cart.id !== action.payload
          );
        }
      }

      state.TotalAmount = state.carts.reduce(
        (sum, cart) => sum + cart.totalPrice,
        0
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMeals.pending, (state) => {
        state.statut = "loading";
      })
      .addCase(fetchMeals.fulfilled, (state, action) => {
        state.statut = "succeeded";
        state.meals = action.payload;
      })
      .addCase(fetchMeals.rejected, (state, action) => {
        state.statut = "failed";
        state.erreur = action.error.message;
      });
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = MealReducer.actions;

export default MealReducer.reducer;
