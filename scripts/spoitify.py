import spotipy
from spotipy.oauth2 import SpotifyOAuth

# Set up authentication
scope = "user-top-read"
sp = spotipy.Spotify(auth_manager=SpotifyOAuth(scope=scope))

# Get user's top tracks for the week
top_tracks = sp.current_user_top_tracks(time_range="short_term", limit=10)

# Iterate over top tracks and count number of times played
song_play_counts = {}
for track in top_tracks["items"]:
    track_id = track["id"]
    track_play_history = sp._get(f"me/player/recently-played?type=track&limit=50&after=1577836800&before=1640601600&ids={track_id}")["items"]
    play_count = len(track_play_history)
    song_play_counts[track["name"]] = play_count

# Sort the songs by play count
sorted_songs = sorted(song_play_counts.items(), key=lambda x: x[1], reverse=True)

# Print the top 10 songs and their play counts
print("Top 10 songs of the week:")
for i, (song_name, play_count) in enumerate(sorted_songs[:10]):
    print(f"{i+1}. {song_name} - {play_count} plays")
