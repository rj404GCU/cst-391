import { Component, Input } from '@angular/core';
import { Album } from '../models/albums.model';
import { Artist } from '../models/artists.model';
import { MusicServiceService } from '../service/music-service.service';

@Component({
  selector: 'app-list-albums',
  templateUrl: './list-albums.component.html',
  styleUrl: './list-albums.component.css'
})
export class ListAlbumsComponent {
  @Input() artist: Artist | undefined;
  albums: Album[] = [];
  selectedAlbum: Album | null = null;

  constructor(private service: MusicServiceService) {}

  ngOnInit()
 {
    console.log("Getting data....");
    this.albums = this.service.getAlbumsOfArtist(this.artist!.artist);
 }

  onSelectAlbum(album: Album) {
    this.selectedAlbum = album;

  }

}
