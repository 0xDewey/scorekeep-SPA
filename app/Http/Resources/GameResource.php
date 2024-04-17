<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class GameResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $address = explode('/', $this->address);

        $data = [
            'uuid' => $this->uuid,
            'address' => $address[0],
            'CPO' => $address[1],
            'city' => $address[2],
            'category' => $this->category,
            'gameDate' => $this->gameDate,
            'isHomeMatch' => $this->isHomeMatch,
            'isCancelled' => $this->isCancelled,
            'cancelledDate' => $this->cancelledDate,
            'timekeeperId' => $this->timekeeperId,
            'secretaryId' => $this->secretaryId,
            'roomManagerId' => $this->roomManagerId,
            'drinkManagerId' => $this->drinkManagerId,
            'timekeeper' => $this->whenLoaded('timekeeper', new VolunteerResource($this->timekeeper)),
            'secretary' => $this->whenLoaded('secretary', new VolunteerResource($this->secretary)),
            'roomManager' => $this->whenLoaded('roomManager', new VolunteerResource($this->roomManager)),
            'drinkManager' => $this->whenLoaded('drinkManager', new VolunteerResource($this->drinkManager)),
            'timekeepers' => $this->whenLoaded('timekeepers', VolunteerResource::collection($this->timekeepers)),
            'secretaries' => $this->whenLoaded('secretaries', VolunteerResource::collection($this->secretaries)),
            'roomManagers' => $this->whenLoaded('roomManagers', VolunteerResource::collection($this->roomManagers)),
            'drinkManagers' => $this->whenLoaded('drinkManagers', VolunteerResource::collection($this->drinkManagers)),
            'visitorTeam' => $this->visitorTeam,
        ];

        return $data;
    }
}
