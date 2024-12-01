<template>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title class="headline">Naira Balance</v-card-title>
            <v-card-subtitle>{{ balance }}</v-card-subtitle>
            <v-card-text>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Available Balance</v-list-item-title>
                  <v-list-item-subtitle>{{ availableBalance }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Pending Balance</v-list-item-title>
                  <v-list-item-subtitle>{{ pendingBalance }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" @click="handleRefresh">Refresh</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        balance: '₦0.00',
        availableBalance: '₦0.00',
        pendingBalance: '₦0.00'
      };
    },
    methods: {
      handleRefresh() {
        // Logic to refresh balance
        // For demo purposes, we'll just simulate a balance update
        this.balance = '₦100,000.00';
        this.availableBalance = '₦80,000.00';
        this.pendingBalance = '₦20,000.00';
      }
    }
  };
  </script>
  
  <style>
  .v-card-title {
    font-size: 24px;
    font-weight: bold;
  }
  .v-card-subtitle {
    font-size: 20px;
    color: grey;
  }
  .v-list-item-title {
    font-size: 18px;
  }
  .v-list-item-subtitle {
    font-size: 16px;
    color: grey;
  }
  </style>
  