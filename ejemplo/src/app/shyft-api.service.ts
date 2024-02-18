import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";

@Injectable({ providedIn: 'root'})
export class ShyftApiService {
    private readonly _httpCliente: HttpClient = inject(HttpClient); 
    private readonly _header = { 'x-api-key': 'CtHdU0hZAhyFAhWG' };
    private readonly _mint  = '7EYnhQoR9YM3N7UoaKRoA44Uy8JeaZV3qyouov87awMs';
    
}