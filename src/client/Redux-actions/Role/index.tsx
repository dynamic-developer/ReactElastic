import axios from 'axios'
const BASE_URL = "http://localhost:3000/searchRoles";
export const getRoleData = (entityStateId:number) => {
    return async (dispatch) => {
        const query = {
            from:0,
            size:20,
            query: {
              bool:{
                filter:[{
                  match: {
                    "entityState.itemID":entityStateId
                  }
                }],
              }
            }
          };
          
          axios.post(BASE_URL,query)
            .then((res) => {
                dispatch({type:"data",payload:res.data.hits.hits})
            });
    }
}

//search filter
export const getSearchRoleData = (searchKey:string) => {
  return async (dispatch) => {
      const query = {
          from:0,
          size:20,
          query: {
            bool:{
              should:[{
                match_phrase: {
                  description:searchKey
                }
              },
              {
                match_phrase: {
                  name:searchKey
                }
              }
            ],
            }
          }
        };
        
        axios.post(BASE_URL,query)
          .then((res) => {
              dispatch({type:"data",payload:res.data.hits.hits})
          });
  }
}
