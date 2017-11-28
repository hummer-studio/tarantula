'use strict'

const Dashboard = {
  template: `
    <div>
      <v-content>
        <v-container>
          <v-layout row>
            <v-flex xs12 sm10 offset-sm1>
              <v-card>
                <v-list two-line>
                  <v-subheader>Recent chat</v-subheader>
                  <template v-for="(item, index) in items">
                    <v-list-tile avatar v-bind:key="item.title" @click="">
                      <v-list-tile-content>
                        <v-list-tile-title v-html="item.title"></v-list-tile-title>
                        <v-list-tile-sub-title class="grey--text text--darken-4">fuck me</v-list-tile-sub-title>
                        <v-list-tile-sub-title>sub title</v-list-tile-sub-title>
                      </v-list-tile-content>
                      <v-list-tile-action>
                        <v-icon v-bind:color="item.active ? 'teal' : 'grey'">chat_bubble</v-icon>
                      </v-list-tile-action>
                    </v-list-tile>

                    <v-divider></v-divider>
                  </template>
                </v-list>


                <v-list subheader>
                  <v-subheader>Previous chats</v-subheader>
                  <v-list-tile avatar v-for="item in items2" v-bind:key="item.title" @click="">
                    <v-list-tile-avatar>
                      <img v-bind:src="item.avatar"/>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                      <v-list-tile-title v-html="item.title"></v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
      <v-btn
        fab
        bottom
        right
        color="pink"
        dark
        fixed
        @click.stop="dialog = !dialog"
      >
        <v-icon>add</v-icon>
      </v-btn>

      <v-dialog v-model="dialog" width="800px">
        <v-card>
          <v-card-title
            class="grey lighten-4 py-4 title"
          >
            Create contact
          </v-card-title>
          <v-container grid-list-sm class="pa-4">
            <v-layout row wrap>
              <v-flex xs12 align-center justify-space-between>
                <v-layout align-center>
                  <v-avatar size="40px" class="mr-3">
                    <img
                      src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png"
                      alt=""
                    >
                  </v-avatar>
                  <v-text-field
                    placeholder="Name"
                  ></v-text-field>
                </v-layout>
              </v-flex>
              <v-flex xs6>
                <v-text-field
                  prepend-icon="business"
                  placeholder="Company"
                ></v-text-field>
              </v-flex>
              <v-flex xs6>
                <v-text-field
                  placeholder="Job title"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  prepend-icon="mail"
                  placeholder="Email"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  type="tel"
                  prepend-icon="phone"
                  placeholder="(000) 000 - 0000"
                  mask="phone"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  prepend-icon="notes"
                  placeholder="Notes"
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <v-card-actions>
            <v-btn flat color="primary">More</v-btn>
            <v-spacer></v-spacer>
            <v-btn flat color="primary" @click="dialog = false">Cancel</v-btn>
            <v-btn flat @click="dialog = false">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  `,

  data: () => ({
    dialog: false,
    items: [
        { active: true, title: 'Jason Oner', avatar: `http://i.pravatar.cc/40?${Math.random()}` },
        { active: true, title: 'Ranee Carlson', avatar: `http://i.pravatar.cc/40?${Math.random()}` },
        { title: 'Cindy Baker', avatar: `http://i.pravatar.cc/40?${Math.random()}` },
        { title: 'Ali Connors', avatar: `http://i.pravatar.cc/40?${Math.random()}` },
      ],
      items2: [
        { title: 'Travis Howard', avatar: `http://i.pravatar.cc/40?${Math.random()}` },
      ]
  }),
}