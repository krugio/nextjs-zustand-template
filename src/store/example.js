
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';


export const useStore = create(devtools(persist
    (
        (set) => ({
            
            count: 1,
            modal: false,
            produtos: [],

            inc: () => set((state) => ({ count: state.count + 1 })),
            setModal: (data) => {
                set(() => ({ modal: data }));
                console.log(data); // Logs the new modal state
            },
            adicionaProduto: (novoItem) => {
                set((state) => ({ produtos: [...state.produtos, novoItem] }))
            },

            reset: ()=> set({ count: 1,
                modal: false,
                produtos: []})

            
            

        }),

        {
            name: 'my-store', // Nome da chave no localStorage para persistência
            Storage: () => localStorage, // Tipo de armazenamento, `localStorage` por padrão
        },

    )),
    {
        name: 'zustand-store', // Nome para identificar o store no Redux DevTools
    },
 
);
