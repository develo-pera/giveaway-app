export const FACEBOOK_API_BASE_URL = 'https://graph.facebook.com/v3.2'

export const API_ROUTES = {
  FACEBOOK_OAUTH_LINK: 'https://www.facebook.com/v3.2/dialog/oauth?',
  GET_CONNECTED_INSTAGRAM_ACCOUNTS: `${FACEBOOK_API_BASE_URL}/me/accounts?fields=connected_instagram_account`,
}
