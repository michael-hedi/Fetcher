<template>
  <div>
    <split-panes>
  <split-pane
  min-size="20" max-size="25"
  >
    <div>
      <v-expansion-panels
        v-model="sideBar"
        multiple
        accordion
      >
    <v-expansion-panel
      v-for="(collection,i) in collections"
      :key="i"
    >
      <v-expansion-panel-header
      >{{ collection.title }}</v-expansion-panel-header>
      <v-divider></v-divider>
      <v-expansion-panel-content
      class="mt-4 pa-0"
      >
      <div 
      v-for="(item,i) in collection.apis"
      :key="i"
      style="border: solid 1px;"
      class="d-flex ma-1 pa-2 rounded">
        <div
          class="d-flex"
          style="width:30%"
        >
          <methodsLabel
            :method="item.method"
          />:
        </div>
        <div class="overflow-hidden cols-9">
          <p class="ma-0 ml-1 text-truncate">{{ item.url }}</p>
          </div>
        </div>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
    </div>
  </split-pane>

  <split-pane>
  <split-panes 
  horizontal>
    <split-pane
    min-size="200" max-size="950"
    >
      <v-sheet dark>
        <div class="d-flex">
          <div class="cols-1">
            <v-select
            outlined
            :messages="['Select method to make an api call']"
            :items="['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS', 'HEAD']"
            dense
            class="ml-3 mt-2"
            >
            </v-select>
          </div>
          <v-text-field
          dense
          class="mx-3 mt-2"
        outlined
        ></v-text-field>
        <v-btn
          class="mt-2 mr-3"
        > Fetch</v-btn>
        </div>
        <v-divider></v-divider>
      </v-sheet>
      <v-tabs 
        dark
        v-model="sections"
        background-color=""
        height="39"
      >
        <v-tab>Params</v-tab>
        <v-tab>Headers</v-tab>
        <v-tab>Body</v-tab>

        <v-tabs-items 
        v-model="sections">
        <v-tab-item>
          <v-sheet
            class="rounded-xxl"
            height="200"
          >
         <v-data-table
            dense
            show-select
            :headers="section_data.params.headers"
            :items="section_data.params.items"
            disable-pagination
            hide-default-footer
            item-key="name"
            class="elevation-1"
          >
          </v-data-table> 
          </v-sheet>
        </v-tab-item>

        <v-tab-item>
          <v-sheet
          height="200"
          >
  
          </v-sheet>
        </v-tab-item>

        <v-tab-item>
          <v-sheet
          height="200"
          >
  
          </v-sheet>
        </v-tab-item>
      </v-tabs-items>
      </v-tabs>

    </split-pane>

    <split-pane>
      <div>
        heloo
      </div>
    </split-pane>
  </split-panes>
</split-pane>

  </split-panes>
 
      
  </div>
</template>
<script>
import methodsLabel from "@/components/methodsLabel.vue";

export default {
  data(){
    return {
      sections : "",
      sideBar : [],
      section_data : {
          params : {
            headers : [
              {
                text: 'Key',
                align: 'start',
                sortable: false,
                value: 'key',
                divider : true
              },
              {
                text: 'Value',
                align: 'start',
                sortable: false,
                value: 'value',
                divider : true
              },
              {
                text: 'Description',
                align: 'start',
                sortable: false,
                value: 'desc',
                divider : true
              }
            ],
            items : [
              {
                'key'   : 'search',
                'value' : 'true',
                'desc'  : 'test params'
              }
            ]
          }
      },
      collections : [
        {
          title : "demo",
          apis : [
              {
                "method" : "post",
                "url"    : "https://madewithvuejs.com/splitpanes"
              },
              {
                "method" : "get",
                "url"    : "https://antoniandre.github.io/splitpanes/?ref=madewithvuejs.com"
              },
              {
                "method" : "post",
                "url"    : "https://www.wallpaperflare.com/search?wallpaper=Abstract+Waves+In+Black+And+White"
              },
              {
                "method" : "get",
                "url"    : "https://www.wallpaperflare.com/lines-rough-dark-pale-abstract-curve-copy-space-studio-shot-wallpaper-sdwv"
              }

          ]
        }
      ]
    }
  },
  components: {
    methodsLabel,
  },
};
</script>
<style>
.v-expansion-panel-content__wrap{
  padding: 0px;
}

</style>
