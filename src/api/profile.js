import apiUrl from '../apiConfig'
import axios from 'axios'

export const createProfile = (profile, user) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/profile',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: {
      profile: {
        age: profile.age,
        height: profile.height,
        sexPref: profile.sexPref,
        relationship: profile.relationship,
        sex: profile.sex,
        funFact: profile.funFact
      }
    }
  })
}

export const updateProfile = (profile, id, user) => {
  return axios({
    url: apiUrl + '/profile/' + id,
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: {
      profile: {
        age: profile.age,
        sexPref: profile.sexPref,
        relationship: profile.relationship,
        funFact: profile.funFact
      }
    }
  })
}

export const showProfile = (user, id) => {
  return axios({
    url: apiUrl + '/profile/' + id,
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}

export const indexProfile = (user) => {
  return axios({
    url: apiUrl + '/profile',
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}

export const deleteProfile = (profile, id, user) => {
  return axios({
    url: apiUrl + '/profile/' + id,
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}
